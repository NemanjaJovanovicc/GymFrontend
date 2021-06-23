import axios from 'axios';
import authHeader from "./auth-header";

const EMPLOYEE_API_BASE_URl = "http://localhost:8080/employee";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URl);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URl, employee ,{ headers: authHeader() });
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URl + '/' + employeeId, { headers: authHeader() });
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URl , employee, { headers: authHeader() });
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URl + '/' + employeeId, { headers: authHeader() });
    }
}

export default new EmployeeService()