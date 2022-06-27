package com.OJT.CRUD.services;

//import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.OJT.CRUD.dao.EmployeesDao;
import com.OJT.CRUD.entities.Employees;


@Service
public class EmployeesServicesImplement implements EmployeesServices {

	
	@Autowired	
	private EmployeesDao empDaoObject;

//	GET
	@Override
	public List<Employees> showAllEmployees() {
		return empDaoObject.findAll();
	}
	@Override
	public Employees showEmployee(long id){
		return empDaoObject.findById(id).orElseThrow();
	}

	
//	POST & PUT
	@Override
	public void addEmployee(Employees e) {
		empDaoObject.save(e);
	}
	@Override
	public void updateEmployee(long id, Employees e) {
		Employees matchedEmployee = empDaoObject.getById(id);
		
		matchedEmployee.setFirstName(e.getFirstName()); 
		matchedEmployee.setLastName(e.getLastName());
		matchedEmployee.setEmailId(e.getEmailId()); 
		
		empDaoObject.save(matchedEmployee);
	}

	
//	DELETE
	@Override
	public void clearEmployees() {
		empDaoObject.deleteAll();
	}
	@Override
	public void deleteEmployee(Long id) {
		empDaoObject.delete(empDaoObject.getById(id));
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
/*	
//	Database
	List<Employees> l1;
	public EmployeesServicesImplement() {
		l1 = new ArrayList<>();
		l1.add(new Employees(101, "Saurabh"));
		l1.add(new Employees(202, "Rachit"));
		l1.add(new Employees(303, "Prajjwal"));
	}

	
//	GET
	@Override
	public List<Employees> showAllEmployees(){
		return l1;
		
	}
	@Override
	public Employees showEmployee(long id){
		Employees found = null;
		for(Employees emp:l1) {
			if(emp.getId()==id) {
				found = emp;
				break;
			}
		}	
		return found;
	}
	
	
//	POST & PUT
	@Override
	public List<Employees> addEmployee(Employees e) {
		l1.add(e);
		return l1;
	}
	@Override
	public List<Employees> updateEmployee(Employees e) {
		for(Employees i: l1) {
			if(i.getId()==e.getId()) {
				i.setName(e.getName());
			}
		}
		return l1;
	}

	
//	DELETE
	@Override
	public List<Employees> clearEmployees() {
		l1.clear();
		return l1;
	}
	@Override
	public void deleteEmployee(Long id) {
		for(Employees i:l1) {
			if(i.getId()==id) {
				l1.remove(i);
			}
		}
	}
*/
	
	
	
}
