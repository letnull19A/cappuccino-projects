const jwt = require('jsonwebtoken');
const config = require('config');
var token;

module.exports = (req, res, next) => {
    if (req.method === "OPTIONS") {
        return next;
    }

    try {

        token = req.headers.authorization.split(' ')[1];

        if (token === null) {
            return res.status(401).json({ message: "Сессия авторизации не найдена!" });
        }

        req.user = jwt.verify(token, config.get("jwtSecretKey"));
        
        next()

    } catch (e) {
        res.status(401).json({ message: 'Нет авторизации', error: e })
    }
}