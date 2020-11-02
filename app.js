var express = require("express");
var app = express();

app.get("/url", (req, res, next) => {
  res.json(["5x2=10", "5+14=19"]);
 });

app.listen(3000, () => {
 console.log("Server running on port 3000");
});