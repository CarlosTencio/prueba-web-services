import React, { useState, useEffect } from 'react';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import EmployeeList from '../components/ListEmployee';
import Gallery from '../components/Gallery';
import { fetchEmployees, addEmployee, updateEmployee, deleteEmployee } from '../api/api';
import { fetchDataNASA } from "../api/apiNASA";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);
  const [img, setImg] = useState([]);
  const [showGallery, setShowGallery] = useState(false); // Nuevo estado para manejar la visualización de la galería


  useEffect(() => { //se ejecuta una vez al inicio porque el segundo argumento es un array vacio, no depende de ningun valor
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
      await addEmployee(employee);
      const data = await fetchEmployees();
      setEmployees(data);
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };
  /*
    const handleUpdateEmployee = async (employee) => {
      try {
        const updatedEmployee = await updateEmployee(employee);
        setEmployees(employees.map(emp => (emp.id === updatedEmployee.id ? updatedEmployee : emp)));
        setEditEmployee(null);
      } catch (error) {
        console.error('Error updating employee:', error);
      }
    };*/
  const handleUpdateEmployee = async (employee) => {
    try {
      await updateEmployee(employee);
      const data = await fetchEmployees(); // vuelve a obtener la lista actualizada
      setEmployees(data); // actualiza el estado con la lista más reciente
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

  const handleGetImg = async () => {
    const data = await fetchDataNASA();
    setImg(data);
    setShowGallery(true);
  }

  return (
    <div>
      <h1>CRUD Employees</h1>
      <button onClick={handleGetImg}>Images</button>
      {showGallery ? (<Gallery imgs={img} />
      ) : (
        <>
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
        </>
      )}
    </div>

  );
};

export default Home;