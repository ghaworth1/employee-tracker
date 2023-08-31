//Dependencies found here
const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = require('.')

const connection = mysql.createConnection({

  host: "localhost",
  port: 3306,
  user: "root",
  password: "Oris!234",
  database: "employee_db"

});

connection.connect(function(err) {

  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  start();

});

// setup

function start() {
  inquirer
    .prompt({

      type: "list",
      choices: [
        "Add department",
        "Add role",
        "Add employee",
        "View departments",
        "View roles",
        "View employees",
        "Update employee role",
        "Quit"
      ],
      message: "What would you like to do?",
      name: "option"

    })
    .then(function(result) {

      console.log("You entered: " + result.option);

      switch (result.option) {

        case "Add department":
          addDept();
          break;
        case "Add role":
          addRole();
          break;
        case "Add employee":
          addEmployee();
          break;
        case "View departments":
          viewDept();
          break;
        case "View roles":
          viewRoles();
          break;
        case "View employees":
          viewEmployees();
          break;
        case "Update employee role":
          updateEmployee();
          break;
        default:
          quit();

      }
    });
};


// add functions 

function addDept() {

  inquirer.prompt({
    
      type: "input",
      message: "What is the name of the department?",
      name: "deptName"

  }).then(function(answer){

      connection.query("INSERT INTO department (name) VALUES (?)", [answer.deptName] , function(err, res) {

          if (err) throw err;
          console.table(res)
          start()

  })
  })
};

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the name of the role?",
        name: "roleName"
      },
      {
        type: "input",
        message: "What is the salary for this role?",
        name: "salaryTotal"
      },
      {
        type: "input",
        message: "What is the department id number?",
        name: "deptID"
      }
    ])
    .then(function(answer) {

      connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.salaryTotal, answer.deptID], function(err, res) {

        if (err) throw err;
        console.table(res);
        start();

      });
    });
};

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the first name of the employee?",
        name: "eeFirstName"
      },
      {
        type: "input",
        message: "What's the last name of the employee?",
        name: "eeLastName"
      },
      {
        type: "input",
        message: "What is the employee's role id number?",
        name: "roleID"
      },
      {
        type: "input",
        message: "What is the manager id number?",
        name: "managerID"
      }
    ])
    .then(function(answer) {

      connection.query("INSERT INTO employee (firstName, lastName, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.eeFirstName, answer.eeLastName, answer.roleID, answer.managerID], function(err, res) {

        if (err) throw err;
        console.table(res);
        start();

      });
    });
};

// view functions

function viewDept() {
  
  let query = "SELECT * FROM department";
    connection.query(query, function(err, res) {

      if (err) throw err;
      console.table(res);
      start();

  });
}

function viewRoles() {

  let query = "SELECT * FROM role";
    connection.query(query, function(err, res) {

      if (err) throw err;
      console.table(res);
      start();

  });
}

function viewEmployees() {

  let query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {

      if (err) throw err;
      console.table(res);
      start();

  });
};

// update employees

function updateEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Which employee would you like to update?",
        name: "update"
      },

      {
        type: "input",
        message: "What is their new role?",
        name: "updateRole"
      }
    ])
    .then(function(answer) {

      connection.query('UPDATE employee SET role_id=? WHERE first_name= ?',[answer.updateRole, answer.eeUpdate],function(err, res) { 

        if (err) throw err;
        console.table(res);
        start();

      });
    });
};

// quit function

function quit() {
  connection.end();
  process.exit();
};