module.exports = (req, res) =>{
    res.status(404);
    res.json({"error" : "Not Found!"})
}