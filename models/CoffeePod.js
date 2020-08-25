const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const PodSchema = new mongoose.Schema({
  sku: String,
});

module.exports = mongoose.model('CoffeePod', PodSchema);
