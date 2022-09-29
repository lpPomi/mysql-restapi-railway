import { Router } from 'express';

import { getPing } from '../controllers/index.controller.js';

const router = Router();

// test connect to database
// the database is companydb
// the table is employee
router.get('/ping', getPing);

export default router;
