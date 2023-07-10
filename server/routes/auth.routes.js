const { signup, signin } = require ("../controllers/auth.controller");

const express = require('express');
const router = express.Router();





router.post('/login', signin);



module.exports = router;