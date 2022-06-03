const express = require('express');
const req = require('express/lib/request');
const app = express()
const bodyParser = require("body-parser");
const res = require('express/lib/response');
const port = 3000
app.use(bodyParser.urlencoded(

    {
        extended: true
    }));
app.use(express.static(path.join(__dirname, "../public")));
var itemarr = ["buy food", "cook food", "Eat lunch"];
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    const today = new Date();
    var options = {
        weekday: 'long',
        // year: 'numeric',
        month: 'long',
        day: 'numeric'
    };


    var day = today.toLocaleDateString("en-US", options);




    res.render("list", {
        KindOfDay: day,
        newlistitems: itemarr

    });

});
app.post("/", function(req, res) {
    var item = req.body.items;
    itemarr.push(item);
    res.redirect("/");


});





app.listen(3000, function(req, res) {
    console.log("server started at port 3000");
})