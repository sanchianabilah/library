const express = require('express');
const router = express.Router();

// Kontroler atau fungsi untuk menangani registrasi
router.post('/register', async (req, res) => {
    try {
        // Logika untuk registrasi user
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(500).send('Error during registration');
    }
});
router.post('/login', async (req, res, next) => {
    try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
   38
    if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id, role: user.role },
   'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
    } catch (err) {
    next(err);
    }
   });
   

module.exports = router;
