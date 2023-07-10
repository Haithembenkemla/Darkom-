const products = require ("../models/products");
module.exports = {
    
    getAllProducts: function(req, res) {
        products.getAll(function(err, results) {
            if(err) res.status(500).send(err);
            else res.json(results)
        })
    },
    addProduct: function(req, res) {
        products.add(function(err,results){
            if(err) res.status(500).send(err);
            else res.json(results)
            console.log(req.body)
        },req.body,req.params.iduser)
    },
    
    getOneProduct: function(req, res) {
        products.getOne(function(err,results){
            if(err) res.status(500).send(err)
            else res.json(results)
        },req.params.id)
    },
    updateOne:function(req,res){
        console.log("hello")
        products.update((err,result)=>{
            if(err) res.status(500).send(err);
            
            else res.json(result)
            console.log(result.data,'reslt');
        },req.body,req.params.idproduct)
    },
    deleteOne:function(req,res){
        products.delete((err,result)=>{
            if(err) res.status(500).send(err);
            
            else res.json(result)
        },req.params.id)
    } 

}