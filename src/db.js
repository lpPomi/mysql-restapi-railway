import { createPool } from 'mysql2/promise';

export const pool = createPool({
  user: 'root',
  password: 'lpomi',
  host: 'localhost',
  port: 3306,
  database: 'companydb',
});
