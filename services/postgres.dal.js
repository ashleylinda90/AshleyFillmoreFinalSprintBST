const dal = require('./postgresDB.js');

// functions for postgres database
var getBSTinfo = function () {
  return new Promise(function (resolve, reject) {
    const sql = 'SELECT * FROM public.bst_info';
    dal.query(sql, [], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

var addBST = function (input, output) {
  return new Promise(function (resolve, reject) {
    const sql = 'INSERT INTO public.bst_info(input, output) VALUES ($1, $2)';
    dal.query(sql, [input, output], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

module.exports = {
  getBSTinfo,
  addBST,
};
