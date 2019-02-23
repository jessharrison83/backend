require("dotenv").config();

const { server } = require("./api/server.js");

const port = process.env.PORT || 3100;
const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

client.connect();

server.listen(port, () => {
  console.log(`Server is listening on ${port}.`);
});
