const express = require('express');
const auth = require('./../../middleware/middleware.auth');
const router = express.Router();
const Users = require('./../Models/model.user');
const Contact = require('./../Models/model.contact');

router.get('/profile/:id', auth, async (req, res) => {
    try {

        const currentUser = await Users.findOne({"_id": req.params.id});

        res.status(200).json(currentUser);

    } catch (e) {
        res.status(500).json({ message: 'Ошибка сервера!' });
    }

});

module.exports = router;