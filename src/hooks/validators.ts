export const validateName = (value: string) =>
  value === ''
    ? 'To pole jest wymagane'
    : value.length > 2
    ? undefined
    : 'Nazwa nie może mieć mniej niz 3 znaki';

export const validateEmail = (value: string) =>
  value === ''
    ? 'To pole jest wymagane'
    : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value,
      )
    ? undefined
    : 'Nieprawidłowy format';

export const validateNumber = (value: string) =>
  value.length !== 9
    ? 'Numer telefonu powinien zawierać dokładnie 9 cyfr'
    : undefined;

export const validateMessage = (value: string) =>
  value === ''
    ? 'To pole jest wymagane'
    : value.length < 5
    ? 'Wiadomość jest zbyt krótka'
    : undefined;
