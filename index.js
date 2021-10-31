var config = require("./config.json")[process.env.NODE_ENV || "production"]
var bodyParser = require("./node_modules/body-parser")
var express = require("express")
var fs = require("fs")
var dummyjson = require("dummy-json");



var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/users", function(req, res){
    var template = fs.readFileSync('data/get-users.hbs', {encoding: 'utf8'});
    res.json(JSON.parse(dummyjson.parse(template)));
});

app.listen(config.PORT);
