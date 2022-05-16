const express = require('express')
const app = express()
const port = 3000

app.get("/", function(req, res) {
    const today = new Date();
    const currenrDay = today.getDay();
    if (currenrDay == 6 || currenrDay == 0) {
        res.send("enjoy its weekend");
    } else {
        res.send("fuck yourself till weekend");

    }

})


app.listen(3000, function(req, res) {
    console.log("server started at port 3000");
})