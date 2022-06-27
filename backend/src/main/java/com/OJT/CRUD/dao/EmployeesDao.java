package com.OJT.CRUD.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.OJT.CRUD.entities.Employees;

public interface EmployeesDao extends JpaRepository<Employees, Long>{

}
