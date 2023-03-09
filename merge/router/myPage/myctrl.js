const test = (req, res) => {
    console.log(req.headers);
    res.json({
        alert: '요청되었습니다.',
    })
};


const getTest = (req, res) => {
    console.log(req.headers);
    if(req.method == 'GET') {
        res.json({
            testA: '서버에서',
            testB: '데이터받기',
            testC: '성공!',
        })

    }
}

module.exports = {
    test,
    getTest
  };