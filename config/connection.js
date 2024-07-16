const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use this to log mongo queries being executed
mongoose.set('debug', true);

module.exports = mongoose.connection;