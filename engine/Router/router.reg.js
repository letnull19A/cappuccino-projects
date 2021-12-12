const { Router } = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const Users = require('./../Models/User');
const router = Router();

router.post('/reg',
    [
        check('user_email', "Некорректный E-Mail").isEmail(),
        check('user_password', "Некорректный пароль")
            .isLength({
                min: 8,
                max: 255,

            }),
        check('user_surname', "Поле Фамилия не должно пустовать!")
            .isLength({
                min: 1,
                max: 255
            }),
        check('user_fatherName', "Поле Отчество не должно пустовать!")
            .isLength({
                min: 1,
                max: 255
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

        const { user_name, user_surname, user_fatherName, user_login, user_password, user_email, user_status } = req.body;

        const isExist = await Users.findOne({ user_login });

        if (!isExist) {

            var hashedPassword = await bcrypt.hash(user_password, 16);
            var users = new Users({
                user_name,
                user_surname,
                user_fatherName,
                user_login, 
                user_password: hashedPassword, 
                user_email, 
                user_status,
            });

            users.save().then((data) => {
                console.log(data);
            });

            message = "Пользователь зарегистрирован!";
        } else {
            message = "Пльзователь с такими данными существует!";
        }
        

        res.status(200).json({ message: message });

    } catch (e) {
        return res.status(500).json({message: "Registration error!" + e});
    }

});

module.exports = router;