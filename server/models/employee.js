import mongoose from 'mongoose';

const employeeSchema = mongoose.Schema({
    firstName: String,
    middleInitial: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    positions: [String],
    desiredHours: String,
    numHours: Number,
    availability: [{
        day: String,
        morning: Boolean,
        evening: Boolean,
    }],
    weekSchedule: [{
        title: String,
        startDate: String,
        endDate: String,
    }],
})

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;