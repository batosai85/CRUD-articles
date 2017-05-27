
const article = require("../model/article.js");

module.exports.remove = function () {
    return function (req, res) {
        article.findOneAndRemove({
            category: req.body.category,
            headline: req.body.headline
        }).then(function (data) {
            res.end();
        }).catch(function (err) {
            console.log("error");
        })
    }
}