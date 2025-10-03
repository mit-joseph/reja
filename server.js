const http = require('http');
const mongodb = require("mongodb");
let db;
const connectionString = "mongodb+srv://joseph:B4M6CiCeiEEYzKvw@cluster0.vjrjglo.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
    if(err) console.log ("ERROR on the connection MongoBD")
        else{
    console.log("MongoDB connection succeed")
    module.exports = client;
  
    const app = require("./app");
    const server = http.createServer(app);
    let PORT = 4006;
    server.listen(PORT, function() {
    console.log(
        `The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`
    );
  }); 

    }
}
);


