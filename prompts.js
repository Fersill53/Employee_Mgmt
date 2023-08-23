const inquirer = require('inquirer');

const mainPrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Please make a selection',
            choices: ['View Employees', 'Add Employee', 'Update Employee', 'Exit'],
        },
    ]);
};

const addEmployeePrompt = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'id',
            message: 'Please enter new employee ID',
        },
        {
            type: 'input',
            name: 'firstName',
            message: 'Please enter first name',
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Please enter last name',
        },
        {
            type: 'input',
            name: 'role',
            message: 'Enter employee role',
        },
        {
            type: 'input',
            name: 'department',
            message: 'Enter employee department',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter employee salary',
        },
    ]);
};

const updateEmployeePrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'Update employee id',
        },
        {
            type: 'input',
            name: 'role',
            message: 'Please update role',
        },
        {
            type: 'input',
            name: 'department',
            message: 'Please update department',
        },
    ]);
};

module.exports = {
    mainPrompt,
    addEmployeePrompt,
    updateEmployeePrompt,
};