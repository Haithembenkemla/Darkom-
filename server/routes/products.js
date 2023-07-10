const express = require('express');
const router = express.Router();


const { getAllProducts, addProduct, getOneProduct, updateOne, deleteOne } = require('../controllers/product');



router.get('/getAll', getAllProducts);
router.get('/:id', getOneProduct);  
router.post('/add/:iduser', addProduct);
router.put('/update/:idproduct',updateOne);
router.delete('/delete/:id',deleteOne)


module.exports = router;