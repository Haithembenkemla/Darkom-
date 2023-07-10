


var jwt = require("jsonwebtoken");

const users = require("../models/users");


exports.signin = (req, res) => {
    const secretKey ="1111"

    users.findOne(function(err,results){
        if(err) res.status(500).send(err)
        else {
              if(results.length >0){
                console.log(results,"result")
                let token = jwt.sign({ userId: users.id }, secretKey);
                console.log(token ,'token')
    
                res.json(JSON.stringify(token))}
              else{
                res.json("not found")
              }
          
    }},req.body)


  }
    
