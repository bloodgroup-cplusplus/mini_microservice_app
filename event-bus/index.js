const express = require("express")
const bodyParser = require("body-parser");

const axios = require("axios");

const app= express();

// assocation with middleware 

app.use(bodyParser.json())

