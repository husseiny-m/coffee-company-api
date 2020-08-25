const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const machineSchema = new mongoose.Schema({
  sku: String
});

module.exports = mongoose.model('CoffeeMachine', machineSchema);