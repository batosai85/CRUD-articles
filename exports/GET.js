
const article = require("../model/article.js");

module.exports.articles = function () {
    return function (req, res) {
        article.find({}).exec().then(function (data) {
            res.send(data);
            res.end();
        }).catch(function (err) {
            res.send("error");
            res.end();
        });
    }
}

module.exports.page = function (page) {
    return function (req, res) {
        article.find({
            category: page.page
        }).then(function (data) {
            res.send(data);
            res.end();
        }).catch(function (err) {
            res.send("error");
            res.end();
        });
    }
}

module.exports.getArc = function (getArc) {
    return function (req, res) {
        article.find({
            headline: getArc.headline,
            category: getArc.category
        }).then(function (data) {
            res.send(data);
            res.end();
        }).catch(function (err) {
            res.send("error");
            res.end();
        });
    }
}