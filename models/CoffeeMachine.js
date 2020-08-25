const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const machineSchema = new mongoose.Schema({
  sku: { type: String, unique: [true, 'sku must be unique'], required: [true, 'sku is required'] },
  productType: {
    type: String,
    enum: ['COFFEE_MACHINE_LARGE', 'COFFEE_MACHINE_SMALL', 'ESPRESSO_MACHINE'],
  },
  waterLineCompatible: { type: Boolean, required: [true, 'waterLineCompatible is required'] },
  model: { type: String, enum: ['base', 'premium', 'deluxe'] },
});

module.exports = mongoose.model('CoffeeMachine', machineSchema);
