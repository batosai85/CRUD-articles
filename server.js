const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const router = require("./exports/router.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use("/", express.static(__dirname + "/public/views"));
app.use("/dist", express.static(__dirname + "/build"));
app.use("/img", express.static(__dirname + "/build/img"));

mongoose.Promise = global.Promise;
const db = "mongodb://articles:articles@ds161008.mlab.com:61008/articles";
const options = {
    server: {
        socketOptions: {
            keepAlive: 300000
            , connectTimeoutMS: 30000
        }
    }
    , replset: {
        socketOptions: {
            keepAlive: 300000
            , connectTimeoutMS: 30000
        }
    }
};
mongoose.connect(db, options);  
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

mongoose.connection.once('open', function () {
    
    app.use(router);   
    
    app.listen(PORT, "127.0.0.1", function (err) {
        err ? console.log("error occured") : console.log("server starting ...");
    });
});