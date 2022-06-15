
exports.getEmployees = function(req, res) {
    res.send(employeesList);
  };
  
exports.getEmployeesById =  function(req, res) {
      var empId = req.params.id;
  
    var empFound = employeesList.filter(function(employee) {
      return employee.id == empId;
    });
  
    res.send(empFound);	
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