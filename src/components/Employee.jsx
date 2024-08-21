import React from 'react';

const Employee = ({ employee, onEdit, onDelete }) => {
  return (
    <div>
      <span>{employee.name}</span>
      <button onClick={() => onEdit(employee)}>Edit</button>
      <button onClick={() => onDelete(employee.id)}>Delete</button>
    </div>
  );
};

export default Employee;
