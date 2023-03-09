const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: '127.0.0.1',
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


//member 테이블에서 nickName, phoneNumber, email, motto, profil_path 값이 들어올 경우 UPDATE 실행
exports.updateMember = (memberNumber, updateData) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM member WHERE memberNumber = ? LIMIT 1';
    cnn.query(query, [memberNumber], (err, data) => {
      if (err) {
        reject(err);
      } else if (data.length === 0) {
        reject('Member not found');
      } else {
        let updateFields = [];
        let updateValues = [];
        if (updateData.nickName) {
          updateFields.push('nickName = ?');
          updateValues.push(updateData.nickName);
        }
        if (updateData.phoneNumber) {
          updateFields.push('phoneNumber = ?');
          updateValues.push(updateData.phoneNumber);
        }
        if (updateData.email) {
          updateFields.push('email = ?');
          updateValues.push(updateData.email);
        }
        if (updateData.motto) {
          updateFields.push('motto = ?');
          updateValues.push(updateData.motto);
        }
        if (updateData.profil_path) {
          updateFields.push('profil_path = ?');
          updateValues.push(updateData.profil_path);
        }
        if (updateFields.length === 0) {
          reject('No update fields provided');
        } else {
          updateValues.push(memberNumber);
          const query = `UPDATE member SET ${updateFields.join(', ')} WHERE memberNumber = ?`;
          cnn.query(query, updateValues, (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(`Member ${memberNumber} updated successfully`);
            }
          });
        }
      }
    });
  });
};

