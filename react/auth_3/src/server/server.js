const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const passport = require('passport');

const corsOptions = {
  origin: 'http://localhost:3000',
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	credentials: true
}


const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(passport.initialize());

app.listen(8000);