const express = require('express');
const db = require('./config/connection');
// const routes = require('./controllers');

const app = express();

const PORT = process.env.PORT || 3001;

// app.use(routes);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`running on port http://localhost:${PORT}!`);
    });
  });
  