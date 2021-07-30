const mysql = require("mysql2");
const express = require("express");
const app = express();

const connection = mysql.createConnection({
  host: "sql11.freesqldatabase.com",
  user: "sql11428394",
  database: "sql11428394",
  password: "RcCrZkDPTA",
});

app.use("/", function (request, responce) {
  connection.query("SELECT name FROM Countries", function (err, results) {
    if (err) console.log(err);
    responce.render("index.hbs",{
      countries : results
    });
  });
});

app.listen(4000);
