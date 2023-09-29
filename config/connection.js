const mongoose = require('mongoose');

mongoose.connect(
 // process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/k-meal-planner',
 process.env.MONGODB_URI || 'mongodb+srv://sampasingha:sampa123@recipes.yj8elkv.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;

