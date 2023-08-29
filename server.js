// export dependencies
const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./db')

// sql connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: 'rootroot',
    database: 'employee_db'
});

// creating connection to the database
connection.connect(function(err) {
    if (err) throw err;
    console.log('connected!')

    startScreen();
});


// add prompt for user
function startScreen() {
    inquirer
    .prompt({
        type: 'list',
        choices: [
            "View all departments",
            "view all roles",
            "view all employees",
            "add a department",
            "add a role",
            "add an employee",
            "update employee role",
            "exit"
        ],
        message: "Choose an option.",
        name: "optionList"
    })
    .then(function(result){
        console.log('You choose: ' + result.optionList)
    })
    // switch statement with return value from prompt
    switch (result.optionList) {
        case "View all departments": viewDepartment();
            break;
        case "view all roles": viewRoles();
            break;
        case "view all employees": viewEmployees();
            break;
        case "add a department": addDepartment();
            break;
        case  "add a role": addRole();
            break;
        case "add an employee": addEmployee();
            break;
        case "update employee role": updateEmpRole();
            break;
        default: exit();
    }
};

// viewDepartment() function:
function viewDepartment() {

}

//  viewRoles() function:
function viewRoles() {

}

// viewEmployees() function:
function viewEmployees() {

}

//addDepartment() function:
function addDepartment() {

}

// addRole() function:
function addRole() {

}

// addEmployee() function:
function addEmployee() {

}

// updateEmpRole() function:
function updateEmpRole() {

}

// exit() function:
function exit() {
    connection.end();
    process.exit();
}