const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
require('dotenv').config()

const Auth0Strategy = require('passport-auth0');
const config = require('./config.js');
const { domain, clientID, clientSecret} = config;

const app = express();
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  })
app.use(
  session({
    secret: "Authorized",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
   domain:       domain,
   clientID:     clientID,
   clientSecret: clientSecret,
   callbackURL:  '/api/auth/login',
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');
    const auth_id = profile.identities[0].user_id;
    const username = profile.nickname;

    db.auth.get_user({auth_id})
      .then(user => {
        if(user.length > 0) {
          return done(null, {id: user[0].id});
        } else {
          db.auth.create_user({auth_id, username})
            .then(newUser => {
              return done(null, {id: newUser[0].id});
            })
        }
      })
  }
));

passport.serializeUser((user, done) => {
  done(null, {id: user.id});
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

app.get('/api/auth/login', passport.authenticate('auth0',
  {successRedirect: 'http://localhost:3000', failureRedirect: 'http://www.google.com', failureFlash: true})
);

const port = 3001;
app.listen(port, () => {
  console.log(`I am listening on port ${port}.`);
});
