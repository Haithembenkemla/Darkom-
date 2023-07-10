const conn =require('../database-mysql/index')

module.exports = {
    
    getAll: function (callback) {
      const sql = 'SELECT * FROM `users`'
      conn.query(sql, function (error, results) {
        callback(error, results);
      });
    },
      
      getOne: function(callback,id) {
        const sql= "SELECT * FROM `users` where id=?"
        console.log(id)
        conn.query(sql, id,function (error, results) {
          callback(error, results);
        });
      },
      findOne: function(callback,values) {
        const sql= `SELECT username, password FROM users WHERE username = ? AND password =?;`
        console.log(values.username)
        conn.query(sql,[values.username,values.password],function (error, results) {
          callback(error, results);
        });
      },
      
      add: function (callback,values) {
        const sql = `INSERT INTO users (username,email,password) VALUES ("${values.username}","${values.email}","${values.password}")`
        conn.query(sql,function (error, results) {
          console.log(results)
          callback(error, results , values);

        });
      } 
      
    };