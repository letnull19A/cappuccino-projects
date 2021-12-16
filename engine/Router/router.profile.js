const express = require('express');
const auth = require('./../../middleware/middleware.auth');
const router = express.Router();

router.get('/profile', auth, async (req, res) => {
    res.send('Some');
});

router.get('/profile/:id', auth, async (req, res) => {
    try {

        console.log('[DEBUG]');
        res.json({ data: 'Success' });

    } catch (e) {
        res.status(500).json({ message: 'Ошибка сервера!' });
    }

});

module.exports = router;