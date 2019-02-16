const express = require('express');
// const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('../middleware/middleware')

const configDonorRoutes = require('../routes/donorRoutes');
const configCoordRoutes = require('../routes/coordRoutes');
const configAuthRoutes = require('../routes/authRoutes');

const server = express();

server.use(helmet());
// server.options('*', cors())
// server.use(cors);
server.use(bodyParser.json());
server.use(express.json(), cors);

configDonorRoutes(server);
configCoordRoutes(server);
configAuthRoutes(server);

module.exports = {
  server,
};
