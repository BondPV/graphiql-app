import { TFunction } from 'i18next';
import { IConstantTranslationFunc } from '../types';

const MAIN_CONTENT_HEIGHT = 'calc(100vh - 190px)';

const REGEX_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

const REGEX_PASSWORD =
  /(?=.*[0-9])(?=.*[!@#$%^&:;~\?\/\*\.\,\[\]\-\+\(\)\<\>])(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&:;~\?\/\*\.\,\[\]\-\+\(\)\<\>]{8,}/g;

const ROUTE = {
  welcomePage: '/',
  mainPage: '/main',
  signInPage: '/signin',
  signUpPage: '/signup',
  errorPage: '*',
};

const SUCCESS_MESSAGE = (
  t: TFunction<'translation', undefined, 'translation'>
): IConstantTranslationFunc => ({
  registration: t('registrationSuccessful'),
  authorization: t('authorizationSuccessful'),
});

const ERROR_MESSAGE = (
  t: TFunction<'translation', undefined, 'translation'>
): IConstantTranslationFunc => ({
  emptyLine: t('errors.fieldIsEmpty'),
  invalidEmail: t('errors.invalidEmail'),
  invalidPassword: t('errors.invalidPassword'),
  passwordMismatch: t('errors.passwordMismatch'),
  unknownError: t('errors.unknownError'),
  emailAlreadyInUse: t('errors.emailAlreadyInUse'),
  wrongPassword: t('errors.wrongPassword'),
  userNotFound: t('errors.userNotFound'),
  invalidEmailFirebase: t('errors.invalidEmailFirebase'),
  requestFailed: t('errors.requestFailed'),
});

const ERROR_CODES_FIREBASE = {
  emailAlreadyInUse: 'auth/email-already-in-use',
  wrongPassword: 'auth/wrong-password',
  userNotFound: 'auth/user-not-found',
  invalidEmailFirebase: 'auth/invalid-email',
};

const DOC_INITIAL_VALUE = 'Query';

const VIDEO_URL = 'https://www.youtube.com/embed/sYiv9UEa4pI';

export {
  MAIN_CONTENT_HEIGHT,
  REGEX_EMAIL,
  REGEX_PASSWORD,
  ROUTE,
  ERROR_MESSAGE,
  ERROR_CODES_FIREBASE,
  DOC_INITIAL_VALUE,
  SUCCESS_MESSAGE,
  VIDEO_URL,
};
