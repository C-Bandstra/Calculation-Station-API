var express = require('express');
const bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const calculations = ['2x2=4', '40/4=10', '8+9=17', '10-1=9']

app.get("/", (req, res, next) => {
  res.json(["5x2=10", "5+14=19"]);
 });

 app.get("/calculations", (req, res, next) => {
  res.json(calculations);
 });

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});