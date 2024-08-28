import React, { useState } from 'react';
import '../style/style.css';

const EditEmployee = ({ employee, updateEmployee }) => {
  const [name, setName] = useState(employee.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee({ ...employee, name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='main'>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Edit employee name"
      />
      <button type="submit" className='update-button'>Update Employee</button>
      </div>
    </form>
  );
};

export default EditEmployee;
