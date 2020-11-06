var express = require('express');
const bodyParser = require('body-parser');

var app = express();
var cors = require('cors')
var PORT = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const calculations = []

 app.get("/calculations", (req, res) => {
  res.json(calculations);
 });

 app.post("/addCalculation", (req, res) => {
  const { sequence } = req.body
  calculations.length === 10 ? calculations.pop() : null
  calculations.unshift(sequence)
  res.json({ ok: true, calculations})
 })

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});