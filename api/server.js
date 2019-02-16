const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const configDonorRoutes = require('../routes/donorRoutes');
const configCoordRoutes = require('../routes/coordRoutes');
const configAuthRoutes = require('../routes/authRoutes');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

configDonorRoutes(server);
configCoordRoutes(server);
configAuthRoutes(server);

module.exports = {
  server,
};
