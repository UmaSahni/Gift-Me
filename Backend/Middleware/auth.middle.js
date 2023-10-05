const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const token = req.headers.authorization
  try {
    if(!token) {
        res.send({"Data":"Please Provide Token"})
    }
    var decoded = jwt.verify(token, 'masai');
    console.log(decoded.foo) // bar
    next()
  } catch (error) {
    res.send({"Data":"Error in Auth Middleware"});
  }
};

module.exports = {auth}
