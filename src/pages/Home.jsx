import React, { useState, useEffect } from 'react';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import EmployeeList from '../components/ListEmployee';
import { fetchEmployees, addEmployee, updateEmployee, deleteEmployee } from '../api/api';

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const data = await fetchEmployees();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    loadEmployees();
  }, []);

  const handleAddEmployee = async (employee) => {
    try {
      const newEmployee = await addEmployee(employee);
      setEmployees([...employees, newEmployee]);
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const handleUpdateEmployee = async (employee) => {
    try {
      const updatedEmployee = await updateEmployee(employee);
      setEmployees(employees.map(emp => (emp.id === updatedEmployee.id ? updatedEmployee : emp)));
      setEditEmployee(null);
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const handleDeleteEmployee = async (id) => {
    try {
      await deleteEmployee(id);
      setEmployees(employees.filter(emp => emp.id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div>
      <h1>CRUD Employees</h1>
      {editEmployee ? (
        <EditEmployee employee={editEmployee} updateEmployee={handleUpdateEmployee} />
      ) : (
        <AddEmployee addEmployee={handleAddEmployee} />
      )}
      <EmployeeList 
        items={employees} 
        onEdit={(employee) => setEditEmployee(employee)}
        onDelete={handleDeleteEmployee}
      />
    </div>
  );
};

export default Home;