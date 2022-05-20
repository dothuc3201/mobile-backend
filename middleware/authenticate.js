const{User} = require('../models');
const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
    try {
        const token = req.header("token");
        const decode = jwt.verify(token, "pikachu");
        console.log(decode);
        if (decode){
            req.user = decode;
            return next();
        }
        console.log(req.user);
    } catch (error) {
        res.status(500).send("bạn cần đăng nhập");
    }
}

module.exports = {
    authenticate
}