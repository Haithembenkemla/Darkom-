const users = require ("../models/users")

module.exports = {
    
    getAllUsers: function(req, res) {
        users.getAll(function(err, results) {
            if(err) res.status(500).send(err);
            else res.json(results)
        })
    },
    addUser: function(req, res) {
        users.add(function(err,results){
            if(err) res.status(500).send(err);
            else res.json(results)
            console.log(req.body , results)
        },req.body)
    },
    
    getOneUser: function(req, res) {
        users.getOne(function(err,results){
            if(err) res.status(500).send(err)
            else res.json(results)
        },req.params.id)
    },
  }
    

     


    

