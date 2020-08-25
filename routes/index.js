
const coffeeMachineRoutes = require('./coffeeMachine.routes')
const coffeePotRoutes = require('./coffeePod.routes')

module.exports = (app)=>{
  app.use('/api/v1/machines', coffeePotRoutes);
  app.use('/api/v1/pods', coffeeMachineRoutes);
};