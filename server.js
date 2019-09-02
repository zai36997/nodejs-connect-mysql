const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  app = express(),
  //mysql = require('mysql'),
  port = process.env.PORT || 5001,

  router = express.Router();
  router.use(cors());

process.env.SECRET_KEY = "secret";
// app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

module.exports = router;

var Router = require("./users");
app.use("/users", Router);

app.listen(port, function() {
  console.log("Listening on port " + port);
});

