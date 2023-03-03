export const validateName = (value: string) =>
  value.length > 2 ? undefined : 'Name cannot have less than 3 characters';
export const validateEmail = (value: string) =>
  value === ''
    ? 'This field is required'
    : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value,
      )
    ? undefined
    : 'Incorrect email format';
export const validateNumber = (value: string) =>
  value.length !== 9 ? 'Phone number must be exactly 9 digits' : undefined;
export const validateMessage = (value: string) =>
  value === ''
    ? 'This field is required'
    : value.length < 5
    ? 'Message is too short'
    : undefined;
