import React from 'react';

const EmployeeList = ({ items, onEdit, onDelete }) => {
  if (!items || items.length === 0) {
    return <p>No employees available.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map(employee => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>
              <button onClick={() => onEdit(employee)}>Edit</button>
              <button onClick={() => onDelete(employee.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;