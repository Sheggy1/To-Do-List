const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Do smth", "Do smth", "Do smth"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {

    const today = new Date();

    let options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };

    let day = today.toLocaleDateString("en-US", options) 

    res.render('list', { kindOfDay: day , newListItems: items});
});


app.post("/", function(req, res) {
   let item = req.body.newItem;

       items.push(item)

    res.redirect("/");
});

app.listen(3000, function() {

})

