const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(routes);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(` I am running on port http://localhost:${PORT}!`);
    });
  });
  