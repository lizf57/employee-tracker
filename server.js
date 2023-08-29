// export dependencies
const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = require('./db')

// display data as a table
require('console.table')

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
    // if (err) throw err;
    console.log('connected!')

    prommptList();
});

// add prompt for user
function prommptList() {
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
    .then(function ({optionList}) {
          // switch statement with return value from prompt
        switch (optionList) {
            case "View all departments": 
                viewDepartment();
                break;

            case "view all roles": 
                viewRoles();
                break;

            case "view all employees": 
                viewEmployees();
                break;

            case "add a department": 
                addDepartment();
                break;

            case  "add a role": 
                addRole();
                break;

            case "add an employee": 
                addEmployee();
                break;

            case "update employee role": 
                updateEmpRole();
                break;

            default:
                quit();
        }
    });
};

// viewDepartment() function:
function viewDepartment() {
    let query = 'SELECT * FROM department';
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        prommptList();
    });
};

//  viewRoles() function:
function viewRoles() {
    let query = 'SELECT * FROM role';
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);

        prommptList();
    });
};

// viewEmployees() function:
function viewEmployees() {
    let query = 'SELECT * FROM employee';
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);

        prommptList();
    });
};

//addDepartment() function:
function addDepartment() {

    inquirer.prompt({
        type: "input",
        message: "What department do you want to add?",
        name: "departmentName"

    }).then(function(answer){
        connection.query("INSERT INTO department (name) VALUES (?)", 
            [answer.departmentName], 
            function(err, res) {

            if (err) throw err
            console.table(res)

            prommptList()
        })
    })
};

// addRole() function:
function addRole() {

    inquirer.prompt([
        {
            type: "input",
            message: "What role do you want to add?",
            name: "roleName"
        },
        {
            type: "input",
            message: "What is the salary for this role?",
            name: "roleSalary"
        },
        {
            type: "input",
            message: "What is the department id number for this role?",
            name: "role_deptID"
        }
    ])
    .then(function(answer){
        connection.query("INSERT INTO role (title, salary, dept_id) VALUES (?, ?, ?)", 
            [answer.roleName, answer.roleSalary, answer.role_deptID], 
            function(err, res) {

            if (err) throw err
            console.table(res)

            prommptList()
        })
    })
};

// addEmployee() function:
function addEmployee() {

    inquirer.prompt([
        {
            type: "input",
            message: "What is the first name of the employee?",
            name: "firstName"
        },
        {
            type: "input",
            message: "What is the last name of the employee?",
            name: "lastName"
        },
        {
            type: "input",
            message: "What is the employee's role id number?",
            name: "e_roleID"
        },
        {
            type: "input",
            message: "What is the manager id number (if applies, otherwise type null)",
            name: "managerID"
        }
    ])
    .then(function(answer){
        connection.query(
            "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", 
            [answer.firstName, answer.lastName, answer.e_roleID, answer.managerID], 
            function(err, res) {

            if (err) throw err
            console.table(res)

            prommptList()
        })
    })
};

// updateEmpRole() function:
function updateEmpRole() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What employee do you want to update(must include last name)?",
                nane: "empUpdate"
            },
            {
                type: "input",
                message: "What role do you want to update the employee too?",
                name: "roleUpdate"
            }
        ]) 
        .then(function(answer){
            connection.query('UPDATE employee SET role_id=? WHERE last_name=?', [answer.empUpdate, answer.role.update],
            function(err, res) {

                if (err) throw err;
                console.table(res)

                prommptList();
            })
        })
};

// exit() function:
function quit() {
    connection.end();
    process.exit();
};