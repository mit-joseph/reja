console.log('Web Serverni Boshlash');
const express = require('express');
const app = express();
const fs = require('fs');

// Mongo DB choqirish
const db = require('./server').db(); 



//1 Kirish/ MIDDLEWARE
app.use(express.static('public')); // DP  public ochiqlaydi
app.use(express.json()); // Midleware DP -> Rest API 
app.use(express.urlencoded({ extended: true }));


//2 Session

//3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing code
app.post("/create-item", (req, res) => {
     console.log('user entered /create-item');
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        if(err) {
            console.log(err);
            res.end('something went wrong')
        } else {
            res.end('successfully addes ')
        }
    });
});

app.get("/hello", function(req, res) {
    res.end(`<h1 style="background: yellowgreen">Hello World by Azamat</h1>`);
})
console.log("A");
app.get("/portfolio", (req, res) => {
    console.log("B");
    res.render("portfolio", { user: user });
});
console.log("C");

app.get("/", function(req, res) {
    console.log('user entered /');
    db.collection("plans").find().toArray((err, data) => {
       if(err) {
        console.log(err);
        req.end("Something went wrong");
       } else {
        console.log(data);
         res.render("reja", {items: data});
       }
    })
});



module.exports = app;