"use strict";

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const cors = require("cors");

mongoose.connect("mongodb://localhost/kjbible");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const routes = require("./routes/routes");
routes(app);

app.listen(port);

console.log(`REST API server started on: ${port}`);