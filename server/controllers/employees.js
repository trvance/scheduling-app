import mongoose from 'mongoose';
import Employee from '../models/employee.js';

export const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find()

        res.status(200).json(employees)
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const addEmployee = async (req, res) => {
    const employee = req.body 
    
    const newEmployee = new Employee(employee)
    console.log("Got a request to add employee")

    try {
        await newEmployee.save()
        
        res.status(201).json(newEmployee)

    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const deleteEmployee = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No employee found with that id')

    await Employee.findByIdAndRemove(id)

    res.json({ message: 'Employee deleted sucessfully' })
}

export const editEmployee = async (req, res) => {
    const { id: _id } = req.params
    const employee = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("Couldn't find the employee you were looking for")

    const editedEmployee = await Employee.findByIdAndUpdate(_id, {...employee, _id}, { new: true })

    res.json(editedEmployee)
}