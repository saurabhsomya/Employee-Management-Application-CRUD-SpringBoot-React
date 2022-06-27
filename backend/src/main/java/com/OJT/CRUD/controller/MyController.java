package com.OJT.CRUD.controller;

import com.OJT.CRUD.services.*;

import ch.qos.logback.classic.Logger;

import com.OJT.CRUD.entities.Employees;

import java.util.List;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
//@RequestMapping("/employees")
public class MyController {

	Logger logger = (Logger) LoggerFactory.getLogger(MyController.class);
	
	@GetMapping("/check")
	public String check() {
		logger.trace("check accessed");
		return "running OK";
	}
	
	
	@Autowired
	private EmployeesServices empServiceObject;
	
	
//	GET
	@GetMapping("/employees")
	public List<Employees> getAllEmployees(){
		logger.trace("All Employees accessed");
		return this.empServiceObject.showAllEmployees();
	}
	@GetMapping("/employees/{id}")
	public Employees getEmployee(@PathVariable String id){
		logger.trace("Employee " + id + " accessed");
		return this.empServiceObject.showEmployee(Long.parseLong(id));
	}
	
	
//	POST & PUT
	@PostMapping("/employees")
	public String postEmployees(@RequestBody Employees e){
		try {
			logger.trace("An Employee Posted");
			this.empServiceObject.addEmployee(e);
			return "added…";
		} catch (Exception e1) {
			return "error";
		}
	}
	@PutMapping("/employees/{id}")
	public String putEmployee(@PathVariable long id, @RequestBody Employees e) {
		try {
			logger.trace("Employee Modified");
			this.empServiceObject.updateEmployee(id, e);
			return "updated…";
		} catch (Exception e1) {
			return "error";
		}
	}
	
	
//	DELETE
	@DeleteMapping("/employees")
	public String deleteAllEmployees(){
		try {
			logger.trace("All Employees deleted");
			this.empServiceObject.clearEmployees();
			return "deleted all…";
		} catch (Exception e) {
			return "error";
		}
	}
	@DeleteMapping("/employees/{id}")
	public String deleteEmployee(@PathVariable long id){
		try {
			logger.trace("Employee " + id + " deleted");
			this.empServiceObject.deleteEmployee(id);
			return "deleted…";
		} catch (NumberFormatException e) {
			return "error";
		}
	}
}
