const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
require('dotenv').config()

const Auth0Strategy = require('passport-auth0');

const app = express();
app.use(cors());

app.use(
  session({
    secret: "Authorized",
    resave: false,
    saveUninitialized: false
  })
);

const port = 3001;
app.listen(port, () => {
  console.log(`I am listening on port ${port}.`);
});
