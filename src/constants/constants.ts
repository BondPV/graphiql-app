import { TFunction } from 'i18next';
import { ConstantTranslationFunction } from '../types';

const REGEX_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

const REGEX_PASSWORD = /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/;

const PATCH = {
  welcomePage: '/',
  mainPage: '/main',
  signInPage: '/signin',
  signUpPage: '/signup',
  errorPage: '*',
};

const ERROR_MESSAGE = (
  t: TFunction<'translation', undefined, 'translation'>
): ConstantTranslationFunction => ({
  emptyLine: t('errors.fieldIsEmpty'),
  invalidEmail: t('errors.invalidEmail'),
  invalidPassword: t('errors.invalidPassword'),
  passwordMismatch: t('errors.passwordMismatch'),
});

export { REGEX_EMAIL, REGEX_PASSWORD, PATCH, ERROR_MESSAGE };
