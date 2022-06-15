
var express = require('express');
var bodyParser = require('body-parser');
const message = require('./utils');
const emp = require('./emp');

var PORT;
if (process.env.PORT) {
  PORT = process.env.PORT;
} else {
  PORT = 80;
}

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send(message.getWelcomeMessage());
});

//REST HTTP Methods
app.get('/employees', emp.getEmployees);
app.get('/employees/:id', emp.getEmployeeById);
app.post('/employees', emp.createEmployee);
app.put('/employees/:id', emp.updateEmployee);
app.delete('/employees/:id', emp.deleteEmployee);

app.listen(PORT);
console.log(message.getPortMessage() + PORT);
