const bodyParser = require("body-parser");
const express = require('express');
const dbConnect = require('./config/db-connect');
const dotenv = require('dotenv').config();
const authRouter = require("./routes/auth-route");

const app = express();
const PORT = process.env.PORT || 4000;

dbConnect();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/user", authRouter);

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
});