//Dependencies found here
const inquirer = require("inquirer");
const mysql = require("mysql2");

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
          addDepartment();
          break;
        case "Add role":
          addRole();
          break;
        case "Add employee":
          addEmployee();
          break;
        case "View departments":
          viewDepartment();
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
}