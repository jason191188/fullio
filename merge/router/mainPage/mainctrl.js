//더미 데이터 시작입니다. ----------------------------------------
const strengthD = [
  {
      title: '적응(Adaptability)',
      count: 3,
      key: 1,
  },
  {
      title: '복구(Restorative)',
      count: 4,
      key: 2,
  },
  {
      title: '지적사고(Intellection)',
      count: 2,
      key: 3,
  },
  {
      title: '연결성(Connectedness)',
      count: 1,
      key: 4,
  },
  {
      title: '최상화(Maximizer)',
      count: 6,
      key: 5,
  },
]
const setRecord = [{
  title: '업프로젝트',
  record: 12,
  key: 1,
},
{
  title: 'CoP',
  record: 31,
  key: 2,
},
{
  title: '직무학습',
  record: 0,
  key: 3,
},
{
  title: '특강',
  record: 22,
  key: 4,
},
{
  title: '기타',
  record: 7,
  key: 5,
},
{
  title: '등등',
  record: 11,
  key: 6,
},];
//더미 데이터 끝입니다. ----------------------------------------

const notice = (req, res) => {

};

const portfolio = (req, res) => {

};

const schedule = (req, res) => {

};

const promise = (req, res) => {

};
const strength = (req, res) => {
  try {
    res.status(200).json(strengthD);
  } catch (error) {
    res.status(500).json(error);
  }
}

const record = (req, res) => {
  try {
      res.status(200).json(setRecord);
      console.log(req.body.month);
  } catch (error) {
    res.status(500).json(error);
  }
};


module.exports = {
  notice,
  portfolio,
  schedule,
  promise,
  record,
  strength,
};