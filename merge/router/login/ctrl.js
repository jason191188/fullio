const userDatabase = require('../../databases/Databases');
const jwt = require('jsonwebtoken');
// const { response } = require('../app');
const userInfo = [{
  password: '1111',
  name: '진승현',
  nickname: '슈발자',
  memberNumber: 22207072,
  pw:'1111',
  user: 22207072,
},];

const login = async (req, res) => {
  
  if(userInfo[0].password !== req.body[0].pw){
    res.status(403).json({
      success: false,
    });
  }else{
    try {
       //access token 발급
       const accessToken = jwt.sign({
        user : userInfo[0].memberNumber,
        userName : userInfo[0].name,
        nickname : userInfo[0].nickname
      }, process.env.ACCESS_SECRET, {
        expiresIn : '5m',
        issuer : 'Fullio', 
      });

      //refresh token 발급
      const refreshToken = jwt.sign({
        user : userInfo[0].memberNumber,
        userName : userInfo[0].name,
        nickname : userInfo[0].nickname
      },  process.env.REFRESH_SECRET, {
        expiresIn : '6h',
        issuer : 'Fullio', 
      });

      //token 전송
      res.cookie("accessToken",accessToken, {
        SameSite:'none',
        secure : false,
        httpOnly : true,
      });

      res.cookie("refreshToken",refreshToken, {
        SameSite: 'none',
        secure : false,
        httpOnly : true,
      });

      res.status(200).json({
        success: true,
      });
      } catch (error) {
            
        res.status(500).json(error);
    }
  }
}

const accessToken = (req, res) => {
   try {
    const token = req.cookies.accessToken;
    const data = jwt.verify(token, process.env.ACCESS_SECRET);

    const userData = userInfo.filter(item => {
      return item.memberNumber === data.user;
    });
    const {pw, ...others} = userData;

    res.status(200).json(others);
   } catch (error) {
    res.status(500).json(error);
   } 
}

const refreshToken = (req, res) => {
  //access token 갱신
  try {
    const token = req.cookies.refreshToken;
    const data = jwt.verify(token, process.env.REFRESH_SECRET);

    const userData = userInfo.filter(item => {
      return item.memberNumber === data.user;
    })[0]

    //access token 재발급
    const accessToken = jwt.sign({
      id : userData.id,
      user : userData.user,
      username : userData.username,
    }, process.env.ACCESS_SECRET, {
      expiresIn : '5m',
      issuer : 'Fullio', 
    });
    //쿠키전송
    res.cookie("accessToken",accessToken, {
      secure : false,
      httpOnly : true,
    });

    res.status(200).json("Access Token Recreated");

  } catch (error) {
    res.status(500).json(error);
  }
}

// const loginSuccess = (req, res) => {
//   try {
//     const token = req.cookies.accessToken;
//     const data = jwt.verify(token, process.env.ACCESS_SECRET);

//   const userData = userDatabase.filter(item => {
//     return item.user === data.user;
//   })[0];

//   res.status(200).json(userData)

//   } catch (error) {
//     res.status(500).json(error)
//   }
  


// }

const logout = (req, res) => {
  try {
    res.cookie('accessToken', '');
    res.cookie('refreshToken', '');
    res.status(200).json("Logout Success");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  login,
  accessToken,
  refreshToken,
  // loginSuccess,
  logout,
}