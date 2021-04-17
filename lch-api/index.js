
const express = require('express');
// import dotenv
require('dotenv').config()
const MongoClient = require('./db/MongoClient');
const { registerMiddleware } = require('./middleware');

const { registerRoutes } = require('./routes');




// connect with MongoDB
const db = new MongoClient();
db.connect();

const app = express();
const port = process.env.PORT || 80;

// register Middleware

registerMiddleware(app);

// register routes
registerRoutes(app);

// listen

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

const closeServer = () => {
  db.disconnect();
  process.exit();
};

process.on('SIGINT', () => closeServer());
process.on('SIGTERM', () => closeServer());