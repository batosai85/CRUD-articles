const mongoose = require("mongoose");

const article = new mongoose.Schema({
    author: {
        type: String,
        required: true,
        trim: true
    },
    headline: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        unique : true,
        trim: true
    },
    oldHeadline: {
        type: String,
        required: true,
        trim: true
    },
    oldCategory: {
        type: String,
        required: true,
        trim: true
    },
}, {
    collection: "articles"
});

module.exports = mongoose.model("article", article);