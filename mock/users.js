import Mock from 'mockjs';

export default {
  'GET /api/v1/user/list': (req, res) => {
    let q = req.query;
    let page = q.page ? +q.page : 1;
    let size = q.size ? +q.size : 10;
    const total = 34;
    let len = size;
    if (page * size > total) {
      page--;
      len = total % size;
    }
    let list = [];
    for (let i = 0; i < len; i++) {
      list.push(
        Mock.mock({
          id: '@increment(1)',
          name: '@cname',
          age: '@integer(18,40)',
        }),
      );
    }
    res.send({ list: list, total: total, page: page });
  },
};
