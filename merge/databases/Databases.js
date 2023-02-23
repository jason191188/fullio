const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'merge-db.czrk1hm6q3fs.ap-northeast-2.rds.amazonaws.com',
    user: 'root',
    password: '22207005',
    database: 'merge'
});
//로그인 정보 읽기
exports.select = ( memberNumber, password ) => {
  return new Promise((resolve, reject) => { //promise 안에 있는 구문이 성공을 하면 reserve를 실행, 실패 시 reject를 실행
    const query = `SELECT * FROM member WHERE memberNumber=${memberNumber} limit 1`;
    cnn.query(query, [memberNumber], (err, data) => {
      if(err) reject(`${err}`);
      resolve(data[0]);
    });
  })
};