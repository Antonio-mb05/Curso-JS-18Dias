const { MongoClient } = require("mongodb");

const client = MongoClient("mongodb://127.0.0.1:27017/escdirecta");

client.connect().then(conexion => console.log(conexion));