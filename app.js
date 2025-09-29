
console.log('Web Serverni Boshlash');
const express = require('express');
const app = express();
const fs = require('fs');

// Mongo DB choqirish
const db = require('./server').db();
const mongodb = require("mongodb")
const { ObjectId } = require('mongodb');




//1 Kirish/ MIDDLEWARE
app.use(express.static('public')); // DP  public ochiqlaydi
app.use(express.json()); // Midleware DP -> Rest API 



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
     res.json(data.ops[0]);
    });
});

app.get("/hello", function(req, res) {
    res.end();
})
console.log("A");
app.get("/portfolio", (req, res) => {
    console.log("B");
    res.render("portfolio", { user: user });
});
console.log("C");

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne(
        { _id: new mongodb.ObjectId(id) },
        function (err, data) {
            res.json({ state: "success" });
        }
    );
});


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