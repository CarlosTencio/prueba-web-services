import React, { useState } from 'react';
import '../style/style.css';

const AddEmployee = ({ addEmployee }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='input'
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter employee name"
      />
      <button type="submit" className='add-button'>Add Employee</button>
    </form>
  );
};

export default AddEmployee;
