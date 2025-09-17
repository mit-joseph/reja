console.log ("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require('http')

//1: Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2: Session kodlari

//3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4: Routing code
app.get("/hello", function(req, res ) {
    res.end("<h1>HELLO WORLD</>");
});
app.get("/gift", function(req, res ) {
    res.end("<h1>Siz sovgalar sahifasidasiz</>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running succesfully on port: ${PORT}`);
});