import React from 'react';
import '../style/style.css';


const EmployeeList = ({ items, onEdit, onDelete }) => {
  if (!items || items.length === 0) {
    return <p>No employees available.</p>;
  }

  return (
    <div className='container-table'>
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
              <button className='edit-button' onClick={() => onEdit(employee)}>Edit</button>
              <button className='delete-button' onClick={() => onDelete(employee.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
  );
};

export default EmployeeList;