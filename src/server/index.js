const express = require("express");

const app = express();

app.use(express.static("dist"));

app.get("/api/getUsername", (req, res) =>
    res.send("Hi!")
);
app.listen(process.env.PORT || 2019, () => console.log("Listening on port 2019!"));