const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about.html");
})
app.get("/gallery", (req, res) => {
    res.sendFile(__dirname + "/public/photo-gallery.html");
})

app.get("/test", (req, res, next) => {
    res.send("it works")
    console.log('true')
})
app.get("*", (req, res, next) => {
    res.status(404)
    console.log('true')
})


app.listen(3003);
// app.use(express.static("public"));


//nodemon app.js
//and go to: http://localhost:3003/