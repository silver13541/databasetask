const mysql = require("mysql2");
const express = require("express");
const app = express();

const connection = mysql.createConnection({
  host: "sql11.freesqldatabase.com",
  user: "sql11428394",
  database: "sql11428394",
  password: "RcCrZkDPTA",
});

app.get("/countries", function (request, responce) {
  connection.query("SELECT * FROM Countries", (err, result, fields) => {
    if (err) console.log(err);
    responce.send(result) 
  });
});

app.get("/cfromco", function (request, responce) {
  connection.query("SELECT C.*,CO.Name,CO.Coordinates FROM Cities as C,Countries as CO WHERE C.country_id=CO.id", (err, result, fields) => {
    console.log(result);
    if (err) console.log(err);
    responce.send(result)
  });
});

app.listen(4000);
