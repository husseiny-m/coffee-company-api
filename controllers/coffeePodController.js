const mongoose = require('mongoose');
const HTTPStatus = require('http-status');
const CoffeePod = mongoose.model('CoffeePod');

exports.getPods = async (req, res) => {
  const coffeePods = await CoffeePod.find().sort({_id :'asc'});
  res.status(HTTPStatus.OK).json(coffeePods);
};