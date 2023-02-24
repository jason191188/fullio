const express = require(`express`);
const dotenv = require('dotenv');
const cookieparser = require('cookie-parser');
const cors = require('cors');
const {
  login,
  accessToken,
  refreshToken,
  loginSuccess,
  logout,
} = require('./router/login/ctrl');

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieparser());
app.use(cors({
  origin : "http://fullio.kr",
  methods : ['GET', 'POST'],
  credentials : true,
}));

//로그인 컨트롤러
app.post('/login', login);
app.get('/accesstoken', accessToken);
app.get('/refreshtoken', refreshToken);
app.get('/login/success', loginSuccess);
app.post('/logout', logout);

//메인페이지 컨트롤러


module.exports = app;