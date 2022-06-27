import React, {useState, useEffect} from 'react';
import EmployeesService from '../Services/EmployeesService'
import {Link, useNavigate} from 'react-router-dom';

export const EmployeesList = () => {
    const [employees, setEmployees] = useState([]);
	const navigate = useNavigate();
    
    useEffect(() => {
        EmployeesService.getAllEmployees().then((response)=>{
            setEmployees(response.data);
        }).catch((error) =>{
            console.log("error: ", error);
        }, [])
    }) //  onLoad get table from SQL and put in employees array

	const deleteEmployee=(id)=>{
		EmployeesService.deleteEmployee(id).then((response) => {
			navigate("/employees");
		});
	}

return (
	<div className="container">
		<Link to="/add-employees" className="btn btn-success btn-sm my-2">
			Add Employee
		</Link>
		<h2 className="text-center">List of Employees</h2>
		<table className="table table-bordered table-striped">
			<thead>
				<tr>
					<th>Id</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Email</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{employees.map((employee) => (
					<tr key={employee.id}>
						<td>{employee.id}</td>
						<td>{employee.firstName}</td>
						<td>{employee.lastName}</td>
						<td>{employee.emailId}</td>
						<td>
							<Link className="btn btn-sm btn-warning col-sm-5 " to={`/edit-employees/${employee.id}`}>
								Update
							</Link>
							<button
								className="btn btn-sm btn-danger col-sm-5 offset-sm-2"
								onClick={(e) => {
									e.preventDefault();
									deleteEmployee(employee.id);
								}}>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);
}
