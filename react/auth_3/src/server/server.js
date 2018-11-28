const express = require("express");
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const app = express();

const corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	credentials: true
}

app.use(cookieParser());
app.use(express.json());
app.use(session({ secret: 'devugeessecret' }));
app.use(cors(corsOptions));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  (username, password, done) => {
    if(username === 'jan' && password === 'foobar') {
      const user = {
        id: 123,
        username: 'jan',
        password: 'foobar',
        admin: true
      };

      return done(null, user);
    }
    else {
      return done({ error: 1000, message: 'user not found' });
    }
  }
));

app.post('/login', passport.authenticate('local', { failureRedirect: '/login'}), (req, res) => {
  res.send({ error: 0, message: 'login successfull' });
});

app.post('/logout', (req, res) => {
  req.session.destroy();
  res.send({ error: 0, message: 'logout successfull' });
});

const isAuthenticated = (req, res, next) => {
  if(req.isAuthenticated()) {
    return next();
  }

  return res.status(401).send({ 
      error: 1001, message: 'User not authenticated' 
    });
}

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  if(id !== 123) {
    return done({ error: 1002, message: 'user not found' });
  }

  done(null, { username: 'jan', id: 123 });
});

app.get('/content', isAuthenticated, (req, res) => {
  res.send({ error: 0, message: 'this is the secret area' });
});

app.listen(8000);