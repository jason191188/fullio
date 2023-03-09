const express = require(`express`);
const dotenv = require('dotenv');
const cookieparser = require('cookie-parser');
const cors = require('cors');


const {
  login,
  accessToken,
  refreshToken,
  // loginSuccess,
  logout,
} = require('./router/login/ctrl');

const {
  notice,
  portfolio,
  schedule,
  promise,
  record,
  strength,
} = require('./router/mainPage/mainctrl');
const { test, getTest } = require('./router/myPage/myctrl');

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieparser());
app.use(cors({
  origin : "http://localhost:3000", 
  methods : ['GET', 'POST', 'PUT', 'DELETE'],
  credentials : true,
}));

//로그인 컨트롤러
app.post('/login', login);
app.get('/accesstoken', accessToken);
app.get('/refreshtoken', refreshToken);
// app.get('/login/success', loginSuccess);
app.post('/logout', logout);

//메인페이지 컨트롤러
app.get('/main/notice', notice);
app.get('/main/portfolio', portfolio);
app.get('/main/schedule', schedule);
app.get('/main/promise', promise);
app.post('/main/record', record);
app.get('/main/strength', strength);

//마이페이지 컨트롤러
app.post('/main/test', test);
app.get('/main/get', getTest);
module.exports = app;