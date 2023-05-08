import { TFunction } from 'i18next';
import { ConstantTranslationFunction } from '../types';

const REGEX_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

const REGEX_PASSWORD = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;

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
  unknownError: t('errors.unknownError'),
  emailAlreadyInUse: t('errors.emailAlreadyInUse'),
  wrongPassword: t('errors.wrongPassword'),
  userNotFound: t('errors.userNotFound'),
  invalidEmailFirebase: t('errors.invalidEmailFirebase'),
});

const ERROR_CODES_FIREBASE = {
  emailAlreadyInUse: 'auth/email-already-in-use',
  wrongPassword: 'auth/wrong-password',
  userNotFound: 'auth/user-not-found',
  invalidEmailFirebase: 'auth/invalid-email',
};

export { REGEX_EMAIL, REGEX_PASSWORD, PATCH, ERROR_MESSAGE, ERROR_CODES_FIREBASE };
