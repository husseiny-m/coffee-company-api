const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

require('../src/models/CoffeeMachine');
require('../src/models/CoffeePod');

const sample = require('./sample');

const CoffeeMachine = mongoose.model('CoffeeMachine');
const CoffeePod = mongoose.model('CoffeePod');

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

async function loadData() {
  try {
    await mongoose.connection.dropDatabase();

    let result = await CoffeeMachine.insertMany(sample.coffeeMachines);
    console.log(`${result.length} Coffee Machines inserted.`);

    result = await CoffeePod.insertMany(sample.coffeePods);
    console.log(`${result.length} Coffee Pods inserted.`);

    await mongoose.connection.close();
  } catch (e) {
    console.log('ERROR::', e);
    await mongoose.connection.close();
    process.exit();
  }
}

loadData();
