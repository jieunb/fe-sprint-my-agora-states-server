const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const data = discussionsData.filter((item)=> {
      return item.id === Number(req.params.id)});

    if(data.length > 0){
      return res.status(200).json(...data);
    } else {
      return res.status(404).send('Not Found');
    }
    
    
    /*
    let list = discussionsData;
    if (req.params) {
      list = list.filter((item)=>{ return item.id === Number(req.params.id)})
    } else {
      return res.status(404).send('NOT FOUND');
    }
    return res.status(200).json(list);
    */
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
  },
};

module.exports = {
  discussionsController,
};
