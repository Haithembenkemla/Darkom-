const conn =require('../database-mysql/index')

module.exports = {
    
    getAll: function (callback) {
      const sql = 'SELECT * FROM `products`'
      conn.query(sql, function (error, results) {
        callback(error, results);
      });
    },
      
      getOne: function(callback,id) {
        const sql= "SELECT * FROM `products` where id=?"
        console.log(id)
        conn.query(sql, id,function (error, results) {
          callback(error, results);
        });
      },
      
      add: function (callback,values,iduser) {
        const sql = `INSERT INTO products (category,name,image,price,users_id) VALUES ("${values.category}","${values.name}","${values.image}","${values.price }",${iduser})`
        conn.query(sql,function (error, results,) {
          console.log(results)
          callback(error, results);

        });
      } ,
      update:function(cb,values,idproduct,iduser){
        const sql=`update products set price="${values.price}" where id=${idproduct} `
        conn.query(sql,(err,result)=>{
          cb(err,result)
        })
      },
      delete:function (cb,id){
        const sql =`DELETE FROM products WHERE id=${id}`
        conn.query(sql,(err,results)=>{
          cb(err,results)
        })
      }
      
    };