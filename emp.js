
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
    console.log('createEmployee body: ' + data);
    employeesList.push(data);
    res.send({message: 'Successfully created employee data'});
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