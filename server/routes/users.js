const express = require('express');
const router = express.Router();


const { getAllUsers, addUser, getOneUser } = require('../controllers/users');



router.get('/getAll', getAllUsers);
router.get('/:id', getOneUser);  
router.post('/add', addUser);


module.exports = router;