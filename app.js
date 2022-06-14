/**
* Copyright 2019 IBM
*
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
**/

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

  
// Defining get request at '/single' route
app.get('/single', function(req, res) {
  res.json({
    id: 1,
    firstName: 'Sandipan',
    lastName: 'Pramanik'
  });
});
  
// Defining get request at '/list' route
app.get('/list', function(req, res) {
  res.json([{
        id: 1,
        firstName: 'Sandipan',
        lastName: 'Pramanik'
    },
    {
        id: 2,
        firstName: 'Adrish',
        lastName: 'Pramanik'
    }
  ]);
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
