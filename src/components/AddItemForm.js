import React, { useState } from 'react';

const AddItemForm = ({ addItem }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addItem(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Add a new item..." 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
        />
        <button className="btn btn-primary" type="submit">Add</button>
      </div>
    </form>
  );
};

export default AddItemForm;
