import { useState } from 'react';
import {
  validateEmail,
  validateMessage,
  validateName,
  validateNumber,
} from './validators';

export type Form = {
  name: {
    value: string;
    validator: (value: string) => undefined | string;
    error: string | undefined;
  };
  email: {
    value: string;
    validator: (value: string) => undefined | string;
    error: string | undefined;
  };
  number: {
    value: string;
    validator: (value: string) => undefined | string;
    error: string | undefined;
  };
  message?: {
    value: string;
    validator: (value: string) => undefined | string;
    error: string | undefined;
  };
};

export type FormValues = Record<keyof Form, string>;
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
  } as Form;

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
