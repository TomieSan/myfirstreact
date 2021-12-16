import { useEffect, useState } from "react";
import employeeService from "../services/employeeService";
import {Link} from 'react-router-dom';


const Employee = () => {
    const[employees, setEmployees] = useState([])

    useEffect(() => {
           refreshTable();
        })

const refreshTable = () => {
    employeeService.getEmployees()
    .then(
        response => {
            setEmployees(response.data)
        }
    )
    .catch(
        () => {
            console.log("error sksks")
        }
    )
}

const deleteEmployee = (employeeId) => {
    employeeService.deleteEmployee(employeeId)
    .then(
        response => {
            console.log("Successfully deleted :D")
            refreshTable();
        }
    )
    .catch(
        error => {
            console.error("Error siya bhie!", error)
        }
    )
}

    return(

        
        <div className="all">
        <div className="container">
            <h3 id="Header">List of Employees</h3>
            <div>
                <table className="table table-hover table-bordered table-light table-striped">
                    <thead>
                    <tr className="table-dark" id="tableHeads">
                        <td>Name</td>
                        <td>Department</td>
                        <td>Locations</td>
                        <td>Actions</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        employees.map(
                            employee =>(
                                <tr className="contents" key = {employee.employeeId}>
                                   <td>{employee.name}</td>
                                   <td>{employee.department}</td>
                                   <td>{employee.location}</td>
                                   <td id="tdbut">
                                   <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                            <Link className= "btn btn-primary" to={`/edit/${employee.employeeId}`}>Update</Link>
                                            <button className= "btn btn-danger" onClick={() =>deleteEmployee(employee.employeeId)}>Delete</button>
                                        </div>
                                   </td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>

     
        </div>

        
    )
}

export default Employee;
