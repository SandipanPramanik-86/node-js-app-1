
var express = require('express');
const message = require('./utils');
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

app.get('/employees', function(req, res) {
  res.send(employeesList);
});

app.get('/employees/:id', function(req, res) {
	var empId = req.params.id;

  var empFound = employeesList.filter(function(employee) {
    return employee.id == empId;
  });

  res.send(empFound);	
});


var employeesList = [
  {
      id: 1,
      firstName: 'Sandipan',
      lastName: 'Pramanik',
      email: 'sandipan.andul@gmail.com'
  },  
  {
      id: 2,
      firstName: 'Sayantan',
      lastName: 'Sinha',
      email: 'sayantan.sinha@gmail.com'
  },
  {
      id: 3,
      firstName: 'Shuvomay',
      lastName: 'Basak',
      email: 'shuvomay.basak@gmail.com'
  }];


app.listen(PORT);
console.log(message.getPortMessage() + PORT);
