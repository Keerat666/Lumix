import React from 'react';

const Input = ({ label = 'Input', onChange, type = 'text', placeholder = 'Enter Text' }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
