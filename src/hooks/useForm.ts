import { useState } from 'react';
import { Form, FormValues } from '../types';
import {
  validateEmail,
  validateMessage,
  validateName,
  validateNumber,
} from './validators';

type FormErrors = Record<keyof Form, string | undefined>;

const toValues = <T extends {}>(form: T): FormValues =>
  Object.entries(form).reduce(
    (current, [key, { value }]: any) => ({
      ...current,
      [key]: value,
    }),
    {} as FormValues,
  );

const toErrors = <T extends {}>(form: T): FormErrors =>
  Object.entries(form).reduce(
    (current, [key, { error }]: any) => ({
      ...current,
      [key]: error,
    }),
    {} as FormErrors,
  );

const isError = <T extends {}>(form: T) =>
  Object.entries(form).some(([key, { error }]: any) => error !== undefined);

const useForm = () => {
  const template = {
    name: {
      value: '',
      validator: validateName,
      error: '',
    },
    email: {
      value: '',
      validator: validateEmail,
      error: '',
    },
    number: {
      value: '',
      validator: validateNumber,
      error: '',
    },
    message: {
      value: '',
      validator: validateMessage,
      error: '',
    },
  };

  const [form, setForm] = useState(template);

  const updateForm = (key: keyof typeof form | 'clear', value: string) => {
    if (key === 'clear') {
      setForm(template);
    } else {
      setForm(prev => ({
        ...prev,
        [key]: {
          ...form[key],
          value: value,
          error: form[key]?.validator(value),
        },
      }));
    }
  };

  return [toValues(form), updateForm, toErrors(form), isError(form)] as const;
};

export default useForm;
