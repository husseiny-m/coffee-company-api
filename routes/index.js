
const coffeeMachineRoutes = require('./coffeeMachine.routes')
const coffeePodRoutes = require('./coffeePod.routes')

module.exports = (app)=>{
  app.use('/api/v1/machines', coffeeMachineRoutes);
  app.use('/api/v1/pods', coffeePodRoutes);
};