const express = require('express');
const router = express.Router();
const { User } = require('../models/user'); // Ganti dengan model User
const { authenticate } = require('../middleware/auth')


module.exports = router;
