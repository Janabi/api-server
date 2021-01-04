module.exports = (req, res, next) =>{
    req.requestTime = new Date().toDateString();
    console.log(req.requestTime);
    next();
}