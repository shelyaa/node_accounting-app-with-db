'use strict';

const express = require('express');
const cors = require('cors');
const { expenseRouter } = require('./routes/expenseRoutes');
const { userRouter } = require('./routes/userRoutes');

function createServer() {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use('/expenses', expenseRouter);
  app.use('/users', userRouter);

  return app;
}

module.exports = {
  createServer,
};
