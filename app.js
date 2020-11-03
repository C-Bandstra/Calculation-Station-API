var express = require("express");
var app = express();

var PORT = process.env.PORT || 5000

app.get("/url", (req, res, next) => {
  res.json(["5x2=10", "5+14=19"]);
 });

app.listen(PORT, () => {
 console.log("Server running on port 5000");
});