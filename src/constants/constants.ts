const REGEX_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

const REGEX_PASSWORD = /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/;

const PATCH = {
  welcomePage: '/',
  mainPage: '/main',
  signInPage: '/signin',
  signUpPage: '/signup',
  errorPage: '*',
};

const ERROR_MESSAGE = {
  emptyLine: 'field is empty',
  invalidEmail: 'the email is not valid',
  invalidPassword:
    'password should have a minimum length of 8 symbols, at least one letter, one digit, one special character',
  passwordMismatch: "The passwords don't match",
};

export { REGEX_EMAIL, REGEX_PASSWORD, PATCH, ERROR_MESSAGE };
