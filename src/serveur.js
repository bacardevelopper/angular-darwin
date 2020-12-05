const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/dist/freelance-portofolio"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/freelance-portofolio/index.html"));
});

app.listen(process.env.PORT);
