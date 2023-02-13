const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const feedRoutes = require("./routes/feed");

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); //application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes);

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://Chairilashar:w2pqIwLjtLu0Ekqf@cluster0.dccacst.mongodb.net/messages?authMechanism=DEFAULT"
)
.then(result => {
    app.listen(8080);
})
.catch(err => console.log(err));

