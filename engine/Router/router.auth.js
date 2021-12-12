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
        
            const user = await User.findOne({ user_login });
        
            if (!user)
                return res.status(400).json({ message: "Пльзователь с такими данными не существует!" });

            var isMatch = await bcrypt.compare(user_password, user.user_password);
        
            console.log(`[DEBUG] ${isMatch}`);

            if (!isMatch)
                return res.status(400).json({ message });
        
            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecretKey'),
                { expiresIn: '1h' }
            );

            res.json({ token, userId: user.id });
            
        } catch (e) {
            return res.status(500).json({message: "Auth error! " + e});
        }

});

module.exports = router;