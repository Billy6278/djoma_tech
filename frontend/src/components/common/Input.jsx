import React from 'react';

export const Input = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  className = '',
  ...props
}) => {
  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label className="form-label" htmlFor={name}>
          {label} {required && <span style={{ color: 'var(--danger)' }}>*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`form-input ${error ? 'input-error' : ''}`}
        style={error ? { borderColor: 'var(--danger)', boxShadow: '0 0 0 3px var(--danger-glow)' } : {}}
        {...props}
      />
      {error && (
        <span className="input-error-message" style={{
          color: 'var(--danger)',
          fontSize: '0.82rem',
          fontWeight: '500',
          marginTop: '4px'
        }}>
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
