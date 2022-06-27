import React, { useState, useEffect } from "react";
import EmployeesService from "../Services/EmployeesService";
import {Link, useNavigate, useParams} from 'react-router-dom'; // to navigate 

export const EmployeesAdd = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [emailId, setEmailId] = useState("");

	const navigate = useNavigate();
	const {id} = useParams();

	const saveOrUpdateEmployee = (e) => {
		e.preventDefault();
		const newEmployee = { firstName, lastName, emailId };
		if (id) {
			EmployeesService.updateEmployee(id, newEmployee)
				.then((response) => {
					navigate("/employees");
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			EmployeesService.createEmployee(newEmployee)
				.then((response) => {
					navigate("/employees");
				})
				.catch((error) => {
					console.log(error);
				});
		}
		
	};

	useEffect(() => {
		EmployeesService.getEmployeeById(id).then((response) => {
			setFirstName(response.data.firstName);
			setLastName(response.data.lastName);
			setEmailId(response.data.emailId);
		}).catch(error=>{
			console.log(error);
		})
	}, [id]);

	const title = ()=>{
		if (id) {
			return <h2 className="card-title text-center">Update Employee</h2>
		}else{
			return <h2 className="card-title text-center">Add Employee</h2>
		}
	}

	return (
		<div className="container">
			<div className="row">
				<div className="card col-md-6 offset-md-3 my-3">
					<div className="card-body">
						{title()}
						<form>
							<div className="row">
								<div className="form-group col-md-6">
									<label className="form-label">First Name:</label>
									<input
										type="text"
										className="form-control"
										placeholder="Enter first name"
										name="firstName"
										value={firstName}
										onChange={(e) => {
											setFirstName(e.target.value);
										}}
									/>
								</div>
								<div className="form-group col-md-6">
									<label className="form-label">Last Name:</label>
									<input
										type="text"
										className="form-control"
										placeholder="Enter last name"
										name="lastName"
										value={lastName}
										onChange={(e) => {
											setLastName(e.target.value);
										}}
									/>
								</div>
							</div>
							<div className="form-group mt-3">
								<label className="form-label">Email Address:</label>
								<input
									type="email"
									className="form-control"
									placeholder="Enter email"
									name="emailId"
									value={emailId}
									onChange={(e) => {
										setEmailId(e.target.value);
									}}
								/>
							</div>
							<button
								className="btn btn-sm btn-primary mt-3"
								onClick={(e) => {
									saveOrUpdateEmployee(e);
								}}>
								Submit
							</button>
							<Link to="/employees" className="btn btn-sm mt-3 mx-3 btn-danger">
								Cancel
							</Link>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
