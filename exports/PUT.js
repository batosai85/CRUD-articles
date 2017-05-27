
var article = require("../model/article.js");

module.exports.update = function () {
    return function (req, res) {
        article.findOneAndUpdate({
            category: req.body.oldCategory,
            headline: req.body.oldHeadline
        }, {
            $set: {
                category: req.body.category,
                headline: req.body.headline,
                author: req.body.headline,
                content: req.body.content,
                oldCategory: req.body.category,
                oldHeadline: req.body.headline
            }
        }, {
            upsert: true
        }).then(function(data){
            res.end();
        }).catch(function(err){
            res.send("error");
        });
    }
}