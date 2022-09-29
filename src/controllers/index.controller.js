import { pool } from '../db.js';

export const getPing = async (req, res) => {
  // get all users from the database
  //const result = await pool.query('SELECT * from employee');
  const [result] = await pool.query("SELECT 'Pong AS result'");
  res.json(result[0]);
};
