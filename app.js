const routes = require('./routes');

require('./connections');

const app = async (req, res) => {
  routes(req, res);
}

module.exports = app;