const jwr = require('jsonwebtoken');
const config = require('config');

modele.exports = (req, res, next) => {
    if (req.method === "OPTIONS") {
        return next;
    }

    try {

        const token = req.hesders.authorization.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: "Сессия авторизации не найдена!" });
        }

        const decoded = jwt.verefy(token, config.get("jwtSecretKey"));

        req.user = decoded;
        next();

    } catch (e) {

    }

}