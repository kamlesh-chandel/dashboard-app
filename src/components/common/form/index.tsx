import { useState } from 'react';
import { Input } from '../input';
import { Button } from '../button';
import { Error } from '../error';
import { EMAIL_REGEX } from '@/utils/regex';
import type { FormProps, FormDataType, FormErrorsType } from '@/types/ui.types';

import './index.css';
import '@/styles/theme.css';
import MultipleSelectChip from '../multiselect-chip';

export const Form: React.FC<FormProps> = ({
  fields = [],
  onSubmit,
  buttonText = 'Submit',
  actions,
}) => {
  const [formData, setFormData] = useState<FormDataType>({});
  const [errors, setErrors] = useState<FormErrorsType>({});

  // normal input change
  const handleChange = (name: string, value: string | string[]) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (typeof value === 'string') validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    const field = fields.find((field) => field.name === name);
    let error = '';

    if (!field) return;

    if (field.required && !value) {
      error = `${field.label} is required`;
    }

    if (!error && field.type === 'email') {
      if (value && !EMAIL_REGEX.test(value)) {
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
    const newErrors: FormErrorsType = {};
    let hasError = false;

    fields.forEach(({ name }) => {
      const value = formData[name];

      if (Array.isArray(value)) {
        if (!value.length) {
          hasError = true;
          newErrors[name] = 'Required';
        }
        return;
      }

      const error = validateField(name, (value as string) || '');
      if (error) {
        hasError = true;
        newErrors[name] = error;
      }
    });

    setErrors(newErrors);
    return !hasError;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateAll()) return;

    onSubmit(formData);
    setFormData({});
    setErrors({});
  };

  // render fields
  const fieldsList = () => {
    return fields.map(({ id, label, name, type, placeholder, options }) => (
      <div className="input-wrapper" key={id}>
        <label htmlFor={id}>{label}</label>

        {/* TEXT INPUTS */}
        {(type === 'text' ||
          type === 'email' ||
          type === 'password' ||
          type === 'number') && (
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            value={(formData[name] as string) || ''}
            onChange={(e) => handleChange(name, e.target.value)}
          />
        )}

        {/* SINGLE SELECT */}
        {type === 'select' && (
          <select
            id={id}
            value={(formData[name] as string) || ''}
            onChange={(e) => handleChange(name, e.target.value)}
          >
            <option value="">Select</option>
            {options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )}

        {/* MULTI SELECT CHIP */}
        {type === 'multiselect' && (
          <MultipleSelectChip
            label={label}
            value={(formData[name] as string[]) || []}
            options={options}
            onChange={(val) => handleChange(name, val)}
          />
        )}

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
