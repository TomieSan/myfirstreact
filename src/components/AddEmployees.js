import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import employeeService from "../services/employeeService";
import '../App.css';

const AddEmployee = () => {

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const navigate = useNavigate();
  const {employeeId} = useParams();

  useEffect(() => {
    if(employeeId){
      employeeService.getEmployee(employeeId)
      .then(response => {
        setName(response.data.name);
        setLocation(response.data.location);
        setDepartment(response.data.department);
      })
      .catch(error => {
        console.log("Something went wrong.");
      })
    }
  }, [])
  

  const saveEmployee = (e) => {
    e.preventDefault();

    if(employeeId){
    const employee = {employeeId, name, location, department};
    console.log(employee)
    employeeService.putEmployee(employee)
    .then(response =>{
      console.log("Updated" + response.data, response.data);
      navigate("/myreact/employee");
    })
    .catch(error => {
      console.log("Something went wrong!")
    })
  }  
else {
  const employee = {name, location, department};
    employeeService.postEmployee(employee)
    .then(response =>{
      console.log("Added!" + employeeId, response.data);
      navigate("/myreact/employee");
    })
    .catch(error => {
      console.log("Something went wrong!")
    })
  }  
}


    return (
      <div id="AddNew">
      <div className="container mb-2">
        <h3 id="addHeader">Add New Employee</h3>
        <form>
          <div className="mb-3">
          <label for="addName" className="form-label">Name</label>
          <input
            type="text"
            placeholder="Enter name of Employee"
            value={name}
            className="form-control"
            id="addName"
            aria-describedby="nameHelp"
            onChange={(e) => setName(e.target.value)
            }/>
      </div>
      <div className="mb-3">
          <label for="addLocation" className="form-label">Location</label>
          <input
            type="text"
            value={location}
            placeholder="Enter location of Employee"
            className="form-control"
            id="addLocation"
            onChange={(e) => setLocation(e.target.value)
            }/>
      </div>
      <div className="mb-3">
          <label for="addDepartment" className="form-label">Department</label>
          <input
            type="text"
            placeholder="Enter department of Employee"
            value={department}
            className="form-control"
            id="addDepartment"
            onChange={(e) => setDepartment(e.target.value)
            }/>
      </div>
      <button type="Submit" className="btn btn-primary" onClick={(e) => saveEmployee(e)}>Submit</button>
      </form>
      </div>
      </div>
    );
}

export default AddEmployee;