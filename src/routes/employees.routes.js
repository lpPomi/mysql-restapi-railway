import { Router } from 'express';

import {
  getEmployees,
  createEmployees,
  updateEmployees,
  deleteEmployees,
  getEmployee,
} from '../controllers/employees.controllers.js';

const router = Router();

// routes
// router.get('/employees', (req, res) => res.send('get employees'));
router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployee);
router.post('/employees', createEmployees);
router.put('/employees/:id', updateEmployees);
router.patch('/employees/:id', updateEmployees);
router.delete('/employees/:id', deleteEmployees);

export default router;
