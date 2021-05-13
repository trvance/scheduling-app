import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'
import * as api from '../api'

export const getEmployees = () => async (dispatch) => {
    try {
        const { data } = await api.fetchEmployees()

        dispatch({ type: FETCH_ALL, payload: data})
    } catch(error) {
        console.log(error)
    }
}

export const addEmployee = (employee) => async (dispatch) => {
    try {
        const { data } = await api.addEmployee(employee)

        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deleteEmployee = (id) => async (dispatch) => {
    try {
        await api.deleteEmployee(id)

        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error)
    }
}

export const editEmployee = (id, employee) => async (dispatch) => {
    try {
        const { data } = await api.editEmployee(id, employee)
        
        dispatch({ type: UPDATE, payload: data})
    } catch (error) {
        console.log(error)
    }
}