const express = require('express');
const router = express.Router();

const { getRegister, postRegister } = require('../controllers/register');

router.get('/register', getRegister);
router.post('/register', postRegister);

module.exports = router;
