import { useState } from 'react';
import {
  validateEmail,
  validateMessage,
  validateName,
  validateNumber,
} from './validators';

type Form = {
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

type FormValues = Record<keyof Form, string>;
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

const useForm = () => {
  const template = {
    name: {
      value: '',
      validator: validateName,
      error: validateName(''),
    },
    email: {
      value: '',
      validator: validateEmail,
      error: validateEmail(''),
    },
    number: {
      value: '',
      validator: validateNumber,
      error: validateNumber(''),
    },
    message: {
      value: '',
      validator: validateMessage,
      error: validateMessage(''),
    },
  } as Form;

  const [form, setForm] = useState(template);

  const updateForm = (key: keyof typeof form, value: string) => {
    setForm(prev => ({
      ...prev,
      [key]: {
        ...form[key],
        value: value,
        error: form[key]?.validator(value),
      },
    }));
  };

  return [toValues(form), updateForm, toErrors(form)] as const;
};

export default useForm;
