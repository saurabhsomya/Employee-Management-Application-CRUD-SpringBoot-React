package com.OJT.CRUD.services;

import java.util.List;
import com.OJT.CRUD.entities.Employees;

public interface EmployeesServices {
	
//	get
	public List<Employees> showAllEmployees();
	public Employees showEmployee(long id);
//	post & put
	public void addEmployee(Employees e);
	public void updateEmployee(long id, Employees e);
//	delete
	public void clearEmployees();
	public void deleteEmployee(Long id);
}
