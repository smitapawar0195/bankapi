const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome...")
})
app.listen(2023, () => {
    console.log("Service is up and running....")
})