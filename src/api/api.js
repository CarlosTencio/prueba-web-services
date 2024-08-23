import axios from 'axios';

const urlApi = 'https://localhost:7262/api/Employees'; // Reemplaza con la URL de tu API

export const fetchEmployees = async () => {
  const response = await axios.get(urlApi);
  return response.data;
};

export const addEmployee = async (employee) => {
  const response = await axios.post(urlApi, employee, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const updateEmployee = async (employee) => {
  const response = await axios.put(`${urlApi}/${employee.id}`, employee, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const deleteEmployee = async (id) => {
  await axios.delete(`${urlApi}/${id}`);
};