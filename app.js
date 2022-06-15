
var express = require('express');
const message = require('./utils');
const emp = require('./emp');

var PORT;
if (process.env.PORT) {
  PORT = process.env.PORT;
} else {
  PORT = 80;
}

var app = express();

app.get('/', function (req, res) {
  res.send(message.getWelcomeMessage());
});

//REST HTTP Methods
app.get('/employees', emp.getEmployees);
app.get('/employees/:id', emp.getEmployeesById);


app.listen(PORT);
console.log(message.getPortMessage() + PORT);
