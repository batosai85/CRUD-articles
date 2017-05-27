
const article = require("../model/article.js");

module.exports.create = function () {
    return function (req, res) {
        var newArticle = new article();
        newArticle.author = req.body.author;
        newArticle.headline = req.body.headline;
        newArticle.category = req.body.category;
        newArticle.content = req.body.content;
        newArticle.oldHeadline = req.body.oldHeadline;
        newArticle.oldCategory = req.body.oldCategory;
        
        newArticle.save().then(function(data){
            res.end();
        }).catch(function(err){
        	res.send("error");
        });
    };
}
module.exports.page = function (page) {
    return function (req, res) {
        page.page = req.body.page;
        res.end();
    };
}
module.exports.getArc = function (getArc) {
    return function (req, res) {
        getArc.headline = req.body.headline;
        getArc.category = req.body.category;
        res.end();
    };
}