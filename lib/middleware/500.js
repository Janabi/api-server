module.exports = (req, res, err) =>{
    res.status(500);
    res.json({"error": "Oops! We have an issue! We will fix it soon!"});
}