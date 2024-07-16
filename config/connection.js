const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Use this to log mongo queries being executed
mongoose.set('debug', true);

module.exports = mongoose.connection;