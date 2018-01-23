require('dotenv').config();

const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    fc = require('./form_controller');

const app = express();

app.use(cors());
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then((db) => {
    console.log("Database connected")
    app.set('db', db)
  })
  .catch(err => console.log(err));

app.post('/api/form', fc.createForm);

const PORT = 4200;
app.listen(PORT, console.log(`I'm listening...on port: ${PORT}`));