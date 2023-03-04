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

export default Form;
