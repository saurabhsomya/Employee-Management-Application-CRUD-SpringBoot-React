import axios from 'axios';

const EMPLOYEES_BASE_REST_API_URL = 'http://localhost:8080/employees';

class EmployeesService{
    getAllEmployees(){
        return axios.get(EMPLOYEES_BASE_REST_API_URL);
    }
    getEmployeeById(id){
        return axios.get(EMPLOYEES_BASE_REST_API_URL + '/' + id);
    }
    createEmployee(employee){
        return axios.post(EMPLOYEES_BASE_REST_API_URL, employee);
    }
    updateEmployee(id, employee){
        return axios.put(EMPLOYEES_BASE_REST_API_URL + '/' + id, employee);
    }
    deleteEmployee(id){
        return axios.delete(EMPLOYEES_BASE_REST_API_URL + '/' + id)
    }
}

export default new EmployeesService();