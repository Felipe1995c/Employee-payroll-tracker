// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  // Empty array used to allow employee data/objects to be created

  const employees = [];
  let addEmployees = true;
  while (addEmployees) {
    const firstName = prompt("What is the employee's first name?");
    const lastName = prompt("What is the employee's last name?");
    const salary = prompt("What is the employee's salary?")
    // .push allows us to add new items to the end of an array and returning a new length.
    employees.push({
      firstName: firstName,
      lastName: lastName,
      // parseFloat allows salary to be used as a nunmber instead of a string.
      // without it... the salaries are added together as a string.
      salary: parseFloat(salary)
    });
    addEmployees = confirm("Would you like to add another employee?");
  }
  return employees;
}

const displayAverageSalary = function(employeesArray) {
  let total = 0;
  let validEmployeeCount = 0; // Track the count of valid employee salaries

  for(let i = 0; i < employeesArray.length; i++) {
    const salary = parseFloat(employeesArray[i].salary); // Parse salary as a float

    // Check if salary is a number and not NaN
    if (!isNaN(salary)) {
      total += salary; // Add to total if it's a valid number
      validEmployeeCount++; // Increment valid employee count
    }
  }

  // Check if there's at least one valid employee salary
  if (validEmployeeCount > 0) {
    const avg = total / validEmployeeCount; // Calculate average
    console.log(`Average Salary is: ${avg.toFixed(2)}`); // Display average with 2 decimal places
  } else {
    console.log("No valid salaries found."); // If no valid salaries found
  }
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  var randomEmp = employeesArray[Math.floor(Math.random() * employeesArray.length)];

  console.log(`Randomly selected employee is ${randomEmp.firstName} ${randomEmp.lastName}`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);
// This causes the names to be ordered in alphabetical order according to last name.
  employees.sort(function(a,b) {
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

