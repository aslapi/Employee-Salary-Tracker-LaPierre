// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  // #1 Create an array
  let inputArray = [];
  let addAnotherEmployee = true;

  while (addAnotherEmployee) {
    // #2 Get first/last/salary from input
    let newEmployee = {
      firstName: prompt('Enter First Name'),
      lastName: prompt('Enter Last Name'),
      salary: prompt('Enter Salary')
    };
    // console.log(newEmployee);

    // console.log(newEmployee.firstName);
    // console.log(newEmployee.firstName === null);
    // console.log(newEmployee.firstName === "");
    if (newEmployee.firstName === null || newEmployee.firstName === "") {
      alert('First Name cannot be blank, try again.');
      continue;
    } else if (newEmployee.lastName === null || newEmployee.lastName === "") {
      alert('Last Name cannot be blank, try again.');
      continue;
    } else if (isNaN(newEmployee.salary)) {
      alert('Salary must be a number, try again.');
      continue;
    } else {

      // add to array
      inputArray.push(newEmployee);
      // console.log(employeeArray);

      // prompt to continue
      addAnotherEmployee = confirm("Click OK to add another employee or cancel.");
      // if answer is true -> restart loop
      // if answer is false (else) -> exit loopy
    }
  }
  // return array
  return inputArray;
}

// Display the average salary
// function declaration
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary

  if (employeesArray === undefined) {
    return;
  } else {
    // # of employees
    let numberOfEmployees = employeesArray.length;
    // #1 Add each employee's salary together
    // variable declaration
    let totalSalary = 0;

    // for loop
    // loop through employees array and add individual salary to total salary which was declared as 0 in the variable declaration above
    for (let i = 0; i < employeesArray.length; i++) {
      // Logs all attributes of each element (employee)
      // console.log(employeesArray[i]);
      // console.log(employeesArray[i].firstName);
      // console.log(employeesArray[i].lastName);
      // console.log(employeesArray[i].salary);

      // declare variable of individual employee salary
      // parseInt means ...."parses a string argument and returns an integer of the specified radix"
      let employeeSalary = parseInt(employeesArray[i].salary);
      totalSalary = totalSalary + employeeSalary;
    }

    console.log('Total Salary:', totalSalary);

    // Divides the number of employees by the total salary
    let averageSalary = totalSalary / numberOfEmployees;
    console.log('Average Salary:', averageSalary);
  }
}





// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
}






/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
