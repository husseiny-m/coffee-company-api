const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const PodSchema = new mongoose.Schema({
  sku: { type: String, unique: [true, 'sku must be unique'], required: [true, 'sku is required'] },
  productType: {
    type: String,
    enum: ['COFFEE_POD_LARGE', 'COFFEE_POD_SMALL', 'ESPRESSO_POD'],
  },
  coffeeFlavor: {
    type: String,
    enum: [
      'COFFEE_FLAVOR_VANILLA',
      'COFFEE_FLAVOR_CARAMEL',
      'COFFEE_FLAVOR_PSL',
      'COFFEE_FLAVOR_MOCHA',
      'COFFEE_FLAVOR_HAZELNUT',
    ],
  },
  packSize: {
    type: Number,
    enum: [1, 3, 5, 7],
  },
});

module.exports = mongoose.model('CoffeePod', PodSchema);
