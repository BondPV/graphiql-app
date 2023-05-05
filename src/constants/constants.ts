const REGEX_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

const REGEX_PASSWORD = /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/;

const PATCH = {
  welcomePage: '/',
  mainPage: '/main',
  signInPage: '/signin',
  signUpPage: '/signup',
  errorPage: '*',
};

export { REGEX_EMAIL, REGEX_PASSWORD, PATCH };
