const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const randomstring = require('randomstring');

const corsOptions = {
  origin: 'http://localhost:3000',
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	credentials: true
}

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'devugeessecret';

const users = [
  { id:1000, name:'jan', password:'foobar' },
  { id:1001, name:'bob', password:'foobar' },
  { id:1002, name:'sara', password:'foobar' }
];

const tokenBlacklist = [];
const strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {

  tokenBlacklist.forEach( (internalId) => {
    if(internalId === jwt_payload.internalId) {
      return next(null, false);
    }
  });

  users.forEach( (user) => {
    if(jwt_payload.id === user.id) {
      user.internalId = jwt_payload.internalId;
      return next(null, user);
    }
  });

  return next(null, false);
});

passport.use(strategy);
const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(passport.initialize());

app.post('/login', (req, res) => {
  if(!req.body.username || !req.body.password) {
    return res.send({ error: 1000, message: 'username and password required' });
  }

  for(let i=0; i<users.length; i++) {
    if(users[i].name === req.body.username && users[i].password === req.body.password) {
      const payload = {
        id: users[i].id,
        internalId: randomstring.generate(10)
      }

      const token = jwt.sign(
          payload, 
          jwtOptions.secretOrKey, 
          { expiresIn: '1d' }
      );
        
      return res.send({ error:0, token: token });
    }  
  }
  return res.send({ error: 1001, message: 'user not found' });
});

app.post('/logout', 
          passport.authenticate('jwt', { session: false }),
          (req, res) => { 
    tokenBlacklist.push(req.user.internalId);
    return res.send({ error: 0, message: 'logout successfull' });
});

app.get('/content', 
        passport.authenticate('jwt', { session: false }),
        async(req, res) => {

    return res.send({
      error: 0,
      message: 'some secret content'
    });
});

app.listen(8000);