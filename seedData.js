const mongoose = require('mongoose');
const { User, Thought } = require('./models');

mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const users = [
  {
    username: 'user1',
    email: 'user1@example.com',
  },
  {
    username: 'user2',
    email: 'user2@example.com',
  },
  {
    username: 'user3',
    email: 'user3@example.com',
  },
];

const thoughts = [
  {
    thoughtText: 'This is a thought from user1',
    username: 'user1',
  },
  {
    thoughtText: 'Another thought, this time from user2',
    username: 'user2',
  },
  {
    thoughtText: 'User3 is thinking deeply',
    username: 'user3',
  },
];

const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Create users
    const createdUsers = await User.create(users);

    // Create thoughts and associate with users
    const createdThoughts = await Promise.all(
      thoughts.map(async (thought) => {
        const newThought = await Thought.create(thought);
        await User.findOneAndUpdate(
          { username: thought.username },
          { $push: { thoughts: newThought._id } }
        );
        return newThought;
      })
    );

    // Add reactions
    await Thought.findOneAndUpdate(
      { _id: createdThoughts[0]._id },
      { $push: { reactions: { reactionBody: 'Great thought!', username: 'user2' } } }
    );

    // Add friends
    await User.findOneAndUpdate(
      { _id: createdUsers[0]._id },
      { $push: { friends: createdUsers[1]._id } }
    );

    console.log('Database seeded!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();