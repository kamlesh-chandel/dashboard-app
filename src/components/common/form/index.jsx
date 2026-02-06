import { useState } from 'react';
import { Input } from './input';
import { Button } from '../button';
import { Error } from '../error';
import './index.css';
import '../../../styles/theme.css'

export const Form = ({
  fields = [],
  onSubmit,
  buttonText = 'Submit',
  actions,
}) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);
  };

  const validateField = (name, value) => {
    const field = fields.find((field) => field.name === name);
    let error = '';

    if (!field) return;

    if (field.required && !value) {
      error = `${field.label} is required`;
    }

    if (!error && field.type === 'email') {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (value && !emailRegex.test(value)) {
        error = 'Invalid email format';
      }
    }

    if (!error && field.minLength) {
      if (value.length < field.minLength) {
        error = `${field.label} must be at least ${field.minLength} characters`;
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    return error;
  };

  const validateAll = () => {
    let newErrors = {};
    let hasError = false;

    fields.forEach((field) => {
      const value = formData[field.name] || '';
      const error = validateField(field.name, value);
      
      if (error) {
        hasError = true;
        newErrors[field.name] = error;
      }
    });

    setErrors(newErrors);
    return !hasError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateAll()) return;

    onSubmit(formData);
    setFormData({});
    setErrors({});
  };

  const fieldsList = () => {
    return fields.map((field) => (
      <div className="input-wrapper" key={field.id}>
        <label htmlFor={field.id}>{field.label}</label>

        <Input
          id={field.id}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          value={formData[field.name] || ''}
          onChange={(val) => handleChange(field.name, val)}
        />
        <Error>{errors[field.name] || ''}</Error>
      </div>
    ));
  }
  return (
    <form className="app-form" onSubmit={handleSubmit}>
      {fieldsList()}
      {actions ? (
        <div className="form-actions">{actions}</div>
      ) : (
        <Button type="submit">{buttonText}</Button>
      )}
    </form>
  );
};
