import { pool } from '../db.js';

// ***************************************
// GET ALL EMPLOYEES
// ***************************************

export const getEmployees = async (req, res) => {
  // get all data from the database
  try {
    //throw new Error('My Error');
    const [result] = await pool.query('SELECT * from employee');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: 'Error occured!',
    });
  }
};

// ***************************************
// CREATE_EMPOYEES
// ***************************************

export const createEmployees = async (req, res) => {
  // create new data in the employee table

  const { name, salary } = req.body;

  try {
    // add the values through JS parameter (?,?)
    //const result = await pool.query(
    // "INSERT INTO employee VALUES (5,'Ion', 5000), (6,'Karl',3300)"
    //'INSERT INTO employee(name, salary ) VALUES (?, ?)', [req.body.name, req.body.salary];

    const [result] = await pool.query(
      'INSERT INTO employee(name, salary ) VALUES (?, ?)',
      [name, salary]
    );
    // );
    //res.json(result[0]);
    //console.log(req.body);
    //res.send({ result });
    res.send({
      id: result.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error occured!',
    });
  }
};

// ***************************************
// GET EMPLOYEE BY ID
// ***************************************

export const getEmployee = async (req, res) => {
  //const id = req.params.id;
  const { id } = req.params;
  try {
    // console.log(id);

    const [result] = await pool.query('SELECT * from employee WHERE id = ?', [
      id,
    ]);

    if (result.length <= 0)
      return res.status(404).json({
        message: 'Employee not found!',
      });

    res.json(result[0]);

    //res.send('Get an Employee');
  } catch (error) {
    return res.status(500).json({
      message: 'Error occured!',
    });
  }
};

// ***************************************
// DELETE EMPLOYEE BY ID
// ***************************************

export const deleteEmployees = async (req, res) => {
  //const id = req.params.id;
  const { id } = req.params;

  try {
    //console.log(id);

    const [result] = await pool.query('DELETE FROM employee WHERE id= ?', [id]);

    //console.log(result);
    //console.log(result.length);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: 'Employee not found!',
      });

    //res.send('Deleted');
    // deletion was successfulbut i dont send any message
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: 'Error occured!',
    });
  }
};

// ***************************************
// UPDATE EMPLOYEE BY ID
// ***************************************

export const updateEmployees = async (req, res) => {
  // extract the request params.id and req.body
  //const id = req.params.id;
  const { id } = req.params;
  const { name, salary } = req.body;

  try {
    // we have to send name and salary in the thunder client

    //console.log(id, name, salary);

    // create an update command
    // UPDATE table_name
    // SET column1 = value1, column2 = value2, ...
    // WHERE condition;

    // const [result] = await pool.query(
    //   "UPDATE employee SET name='Ytu', salary=3000 WHERE id = ?",
    //   [id]
    // );

    // to use with put
    // const [result] = await pool.query(
    //   'UPDATE employee SET name = ?, salary = ? WHERE id = ?',
    //   [name, salary, id]
    // );

    // to use with patch
    const [result] = await pool.query(
      'UPDATE employee SET name = IFNULL(?,name), salary = IFNULL(?,salary) WHERE id = ?',
      [name, salary, id]
    );

    //console.log(result);

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: 'Employee not found!',
      });

    // show again the data with id ... id
    const [row] = await pool.query('SELECT * from employee WHERE id = ?', [id]);
    //console.log(row);
    //console.log(req.params.body);
    //res.send('updateEmployees');
    res.json(row[0]);
  } catch (error) {
    return res.status(500).json({
      message: 'Error occured!',
    });
  }
};
