const connection = require('./db');

const getAllEmployee = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM employees', (err, results) => {
            if (err) reject (err);
            resolve(results);
        });
    });
};

const addEmployee = (employee) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO employees SET ?', employee, (err, result) => {
            if (err) reject (err);
            resolve(result.insertID);
        });
    });
};

const updateEmployee = (id, role) => {
    return new Promise((resolve, reject) => {
        connection.query(
            'UPDATE employees SET role = ? WHERE id = ?',
            [role, id],
            (err, result) => {
                if (err) reject(err);
                resolve(result.affectedRows > 0); 
            }
        );
    });
};



module.exports = {
    getAllEmployee,
    addEmployee,
    updateEmployee,
};