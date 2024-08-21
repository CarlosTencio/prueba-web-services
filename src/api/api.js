import axios from 'axios';

const API_URL = 'https://api.example.com/employees'; // Reemplaza con la URL de tu API

export const fetchEmployees = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addEmployee = async (employee) => {
  const response = await axios.post(API_URL, employee, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const updateEmployee = async (employee) => {
  const response = await axios.put(`${API_URL}/${employee.id}`, employee, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const deleteEmployee = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};