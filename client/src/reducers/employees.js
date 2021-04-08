import { FETCH_ALL, DELETE, UPDATE, CREATE } from '../constants/actionTypes'

export default (employees=[], action) => {
    switch(action.type) {
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...employees, action.payload]
        case DELETE:
            return employees.filter((employee) => employee._id !== action.payload)
        case UPDATE:
            return employees.map((employee) => employee._id === action.payload._id ? action.payload : employee)
        default:
            return employees
    }
}