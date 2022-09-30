import express, { application } from 'express';

// without {} becaus it is an export de4fault
import employeesRoutes from './routes/employees.routes.js';

import indexRoutes from './routes/index.routes.js';

const app = express();

// to read json data from the backend
app.use(express.json());

// *******************
// to use the routes
//app.use('/api',employeesRoutes);
app.use(employeesRoutes);
app.use(indexRoutes);
// and if a wrong route was set
app.use((req, res, next) => {
  res.status(404).json({
    message: 'endpoint not found',
  });
});

export default app;
