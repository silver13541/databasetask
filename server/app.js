const mysql = require("mysql2");
const express = require("express");
const app = express();

const connection = mysql.createConnection({
  host: "sql11.freesqldatabase.com",
  user: "sql11428394",
  database: "sql11428394",
  password: "RcCrZkDPTA",
});

app.use("/task1", function (request, responce) {
  connection.query("SELECT * FROM Countries", (err, result, fields) => {
    if (err) console.log(err);
    responce.send(result)
  });
});

app.use("/task2", function (request, responce) {
  connection.query("SELECT C.* FROM Cities C INNER JOIN Countries CO ON C.country_id=CO.id ", (err, result, fields) => {
    console.log(result);
    if (err) console.log(err);
    responce.send(result)
  });
});

app.use("/task3", function (request, responce) {
  connection.query("SELECT C.* FROM Cities C INNER JOIN Countries CO ON C.country_id=CO.id ", (err, result, fields) => {
    console.log(result);
    if (err) console.log(err);
    responce.send(result)
  });
});

app.listen(4000);
