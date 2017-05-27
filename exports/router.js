const express = require("express");
const router = express.Router();
const GET = require("./GET.js");
const POST = require("./POST.js");
const PUT = require("./PUT.js");
const DELETE = require("./DELETE.js");

const page = {};
const getArc = {};
    
router.route("/articles")
.get(GET.articles())
.post(POST.create())
.put(PUT.update())
.delete(DELETE.remove());

router.route("/page")
.get(GET.page(page))
.post(POST.page(page));

router.route("/article")
.get(GET.getArc(getArc))
.post(POST.getArc(getArc));
 

module.exports = router;