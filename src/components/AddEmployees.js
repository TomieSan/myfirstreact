import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import employeeService from "../services/employeeService";

const AddEmployee =() =>{

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [department, setDepartment] = useState("");
    const navigate = useNavigate();
    const {employeeId} = useParams();

    useEffect(
        () =>{
            if(employeeId){
                employeeService.getEmployee(employeeId) //promise
                .then(
                    response =>{
                        setName(response.data.name);
                        setLocation(response.data.location);
                        setDepartment(response.data.department);
                    }
                )
                .catch(
                    error =>{
                        console.error("Error!")
                    }
                )
            }
            else{
                console.log("employeeId does not exist")
            }
        },[]
    )

    const saveEmployee = (e) =>{
        e.preventDefault();

        if(employeeId){
            //update
            const employee = {employeeId, name, location, department};
            employeeService.putEmployee(employee)
                .then(
                    response =>{
                        console.log("Updated employee!", response.data)
                        navigate('/myfirstreact/employee')
                    }
                )
                .catch(
                    error =>{
                        console.error("Something went wrong!")
                    }
                )
        }
        else{
            // add employee
            const employee = {name, location, department};
            employeeService.postEmployee(employee)
                .then(
                    response =>{
                        console.log("Added a new employee!", response.data)
                        navigate('/myfirstreact/employee')
                    }
                )
                .catch(
                    error =>{
                        console.error("Something went wrong!")
                    }
                )
        }
    }

    return (
        <div className="container">
            <h1>Add/Edit Employee</h1>
                <form>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={name}
                        id="name"
                        placeholder="Add employee name"
                        onChange={
                            (e) =>{
                                setName(e.target.value)
                            }
                        }/>
                    </div>
                    <div className="mb-3">
                        <label for="location" className="form-label">Location</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={location}
                        id="location"
                        placeholder="Add employee location"
                        onChange={
                            (e) =>{
                                setLocation(e.target.value)
                            }
                        }/>
                    </div>
                    <div className="mb-3">
                        <label for="department" className="form-label">Department</label>
                        <input 
                        type="text" 
                        className="form-control"
                        value={department} 
                        id="department"
                        placeholder="Add employee department"
                        onChange={
                            (e) =>{
                                setDepartment(e.target.value)
                            }
                        }/>
                    </div>
                    <button type="submit" className="btn btn-info" onClick={(e) => saveEmployee(e)}>Save</button>
                </form>
        </div>
    )
}

export default AddEmployee
