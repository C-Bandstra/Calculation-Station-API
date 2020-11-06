var express = require('express');
const bodyParser = require('body-parser');

var app = express();
var cors = require('cors')
var PORT = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const calculations = []

app.get("/", (req, res, next) => {
  res.json(["5x2=10", "5+14=19"]);
 });

 app.get("/calculations", (req, res, next) => {
  res.json(calculations);
 });

 app.post("/addCalculation", (req, res, next) => {
  const { sequence } = req.body
  calculations.length === 10 ? calculations.pop() : null
  calculations.unshift(sequence)
  res.json({ ok: true, calculations})
 })

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});