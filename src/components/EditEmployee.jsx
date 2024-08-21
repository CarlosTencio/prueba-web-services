import React, { useState } from 'react';

const EditEmployee = ({ employee, updateEmployee }) => {
  const [name, setName] = useState(employee.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee({ ...employee, name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Edit employee name"
      />
      <button type="submit">Update Employee</button>
    </form>
  );
};

export default EditEmployee;
