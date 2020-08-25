const mongoose = require('mongoose');
const HTTPStatus = require('http-status');
const CoffeeMachine = mongoose.model('CoffeeMachine');

exports.getMachines = async (req, res) => {
  const coffeeMachines = await CoffeeMachine.find(req.query).sort({ _id: 'asc' });
  res.status(HTTPStatus.OK).json(coffeeMachines);
};
