const { mainPrompt, addEmployeePrompt, updateEmployeePrompt } = require('./prompts');

const { getAllEmployee, addEmployee, updateEmployee } = require('./employee');

const main = async () => {
    console.log('Employee Management App');
    
    while (true) {
        const { action } = await mainPrompt();

    switch (action) {
        case 'View employees':
            const employees = await getAllEmployee();
            console.table(employees);
            break;
        
        case 'Add employee':
            const newEmployee = await addEmployeePrompt();
            const newEmployeeId = await addEmployee(newEmployee);
            console.log(`Successfully added new employee with ID: ${newEmployeeId}`);
            break;

        case 'Update employee':
            const { id, role } = await updateEmployeePrompt();
            const isUpdated = await updateEmployee(id, role);
            if (isUpdated) {
                console.log('Update successful');
            } else {
                console.log('Unable to find employee. Please check ID.');
            }
            break;

        case 'Exit':
            console.log('Exiting Employee Management App');
            process.exit(0);
        default:
            console.log('Invalid entry. Please try again');
        }
    }
};

main();