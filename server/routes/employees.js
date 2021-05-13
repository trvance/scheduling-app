import express from 'express';
import { getEmployees, addEmployee, editEmployee, deleteEmployee } from '../controllers/employees.js';

const router = express.Router();

router.get('/', getEmployees);
router.post('/', addEmployee);
router.patch('/:id', editEmployee);
router.delete('/:id', deleteEmployee);

export default router;