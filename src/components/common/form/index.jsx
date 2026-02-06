import { useState } from 'react';
import { Input } from './input';
import { Button } from '../button';
import { Error } from '../error';
import './index.css';
import '@/styles/theme.css';

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

    fields.forEach(({name}) => {
      const value = formData[name] || '';
      const error = validateField(name, value);

      if (error) {
        hasError = true;
        newErrors[name] = error;
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
    return fields.map(({id, label, name, type, placeholder}) => (
      <div className="input-wrapper" key={id}>
        <label htmlFor={id}>{label}</label>

        <Input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={formData[name] || ''}
          onChange={(event) => handleChange(name, event.target.value)}
        />
        <Error>{errors[name] || ''}</Error>
      </div>
    ));
  };

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
