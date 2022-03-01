
const employee = {
    name: 'Janhavi Shinde',
    streetAddress:'Landon Street'
};

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name = 'Sam';
    employee.streetAddress = '12 Broadway';
return employee;
}

const newEmployee = 

destructivelyUpdateEmployeeWithKeyAndValue();

// function updateEmployeeWithKeyAndValue() {
// const newEmployee = Object.assign(employee, {name: "Sam", streetAddress: "11 Broadway"})
// return newEmployee;
// };
//OR, YOU CAN DO: 

// const updatedEmployee = { 
//     name: 'Sam',
//     streetAddress: '12 Broadway'
// }
// function updateEmployeeWithKeyAndValue(){
//     newEmployee = Object.assign(employee, updatedEmployee)
//     return newEmployee;
// }

//OR YOU CAN DO: ..spreadOperator

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newEmployee = {...employee};
    newEmployee.name = "Sam";
    newEmployee.streetAddress = "11 Broadway";
    return newEmployee;  //    HOW TO RETURN EMPLOYEE AFTER PASSING RETURN?
}

updateEmployeeWithKeyAndValue();

function deleteFromEmployeeByKey() {
const veryNewEmployee = {...newEmployee};
  delete veryNewEmployee.name;
  return veryNewEmployee;
}
deleteFromEmployeeByKey();

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    return employee;
}

destructivelyDeleteFromEmployeeByKey();