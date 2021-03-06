
exports.getEmployees = function(req, res) {
    res.send(employeesList);
};
  
exports.getEmployeeById =  function(req, res) {
      var empId = req.params.id;
  
    var empFound = employeesList.filter(function(employee) {
      return employee.id == empId;
    });
  
    res.send(empFound);	
};

exports.createEmployee = function(req, res) {

    var data = req.body;
    employeesList.push(data);
    res.send({message: 'Successfully created employee data'});
}; 

exports.updateEmployee = function(req, res) {
  var paramId = req.params.id;
  var data = req.body;

  for (var index = 0; index < employeesList.length; index++) {
    if (employeesList[index].id == paramId) {
      employeesList[index].firstName = data.firstName;
      employeesList[index].lastName = data.lastName;
      employeesList[index].email = data.email;
      break;
    }
  }

  res.send({message: 'Successfully updated employee data'});
};

exports.deleteEmployee = function(req, res) {
  var paramId = req.params.id;

  for (var index = 0; index < employeesList.length; index++) {
    if (employeesList[index].id == paramId) {
      employeesList.splice(index, 1);
      break;
    }
  }

  res.send({message: 'Successfully deleted employee data'});

};


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