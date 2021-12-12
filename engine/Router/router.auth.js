const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('./../Models/User');
const router = Router();

router.post('/auth',
    [
        check('user_password', "Некорректный пароль")
            .isLength({
                min: 8,
                max: 255,

            }),
        check('user_login', "Не корректное поле Логина")
            .isLength({
                min: 8,
                max: 255
            })
    ],
    async (req, res) => {

        try {

            var message, errors;
        
            errors = validationResult(req);
        
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    error: errors.array(),
                    message: "Некорректные данные!"
                })
            }
        
            const { user_login, user_password } = req.body;
        
            const isExist = await User.findOne({ user_login });
        
            if (!isExist)
                return res.status(400).json({ message: "Пльзователь с такими данными не существует!" });
        
            console.log(`[SERVER] ${bcrypt.compare(req.body.user_password, User.user_password)}`);

            var isMatch = await bcrypt.compare(req.body.user_password, User.user_password);
        
            if (!isMatch)
                return res.status(400).json({ message: "Пользователь не найден!" });
        
            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecretKey'),
                { expresIn: '1m' }
            );
            
        } catch (e) {
            return res.status(500).json({message: "Auth error! " + e});
        }

});

module.exports = router;