import axios from 'axios';

const url = 'http://localhost:5000/employees';

export const fetchEmployees = () => axios.get(url);
export const addEmployee = (newEmployee) => axios.post(url, newEmployee);
export const editEmployee = (id, editedEmployee) => axios.patch(`${url}/${id}`, editedEmployee);
export const deleteEmployee = (id) => axios.delete(`${url}/${id}`);