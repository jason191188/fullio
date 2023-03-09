const userDatabase = require('../../databases/Databases');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const userInfo = await userDatabase.select(req.body.user, req.body.pw);
  
  if(!userInfo || userInfo.password !== req.body.pw){
    res.status(403).json({
      success: false
    });
  }else{
    try {
       //access token 발급
       const accessToken = jwt.sign({
        user : userInfo.memberNumber,
        userName : userInfo.name,
        nickName : userInfo.nickName
      }, process.env.ACCESS_SECRET, {
        expiresIn : '5m',
        issuer : 'Fullio', 
      });

      //refresh token 발급
      const refreshToken = jwt.sign({
        user : userInfo.memberNumber,
        userName : userInfo.name,
        nickName : userInfo.nickName
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
        success: true
      });
      } catch (error) {
            
        res.status(500).json(error);
    }
  }
}

const accessToken = async (req, res) => {
  try {
   const token = req.cookies.accessToken;
   if(!token) {
    res.status(401).send({
      token : false
    });
   } else {
    const data = jwt.verify(token, process.env.ACCESS_SECRET);
    const userData = await userDatabase.select(data.user);
      if(!userData) {
      res.status(401).send({
        ok : false
      });
    } else {
      const {pw, ...others} = userData;

      res.status(200).json(others);
    }
      
   }
     
  } catch (error) {
   res.status(500).json(error);
  } 
}

const refreshToken = async (req, res) => {
  //access token 갱신
  try {
    const token = req.cookies.refreshToken;
    const data = jwt.verify(token, process.env.REFRESH_SECRET);
    const userData = await userDatabase.select(data.user);
    if(!userData){
      res.status(401).send({
        ok : false
      });
    } else{
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

    }

    
  } catch (error) {
    res.status(500).json(error);
  }
}
const logout = (req, res) => {
  try {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    res.status(200).json("Logout Success");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  login,
  accessToken,
  refreshToken,
  logout,
}