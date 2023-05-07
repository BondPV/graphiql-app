import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { ILoginForm } from '../../types';
import { useNavigate } from 'react-router-dom';
import {
  ERROR_CODES_FIREBASE,
  ERROR_MESSAGE,
  PATCH,
  REGEX_EMAIL,
  REGEX_PASSWORD,
} from '../../constants';
import { Alert, Box, Button, Link, Snackbar, TextField, Typography, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#001E6A',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#001E6A',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#001E6A',
      borderLeftWidth: 6,
      padding: '4px',
    },
  },
});

const FormAuthorization = (props: { registration: boolean }): JSX.Element => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { registration } = props;
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
  });

  const handleRegister = (email: string, password: string): void => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/main');
      })
      .catch((error) => {
        if (error.code === ERROR_CODES_FIREBASE.emailAlreadyInUse) {
          setError(ERROR_MESSAGE(t).emailAlreadyInUse);
        } else {
          setError(ERROR_MESSAGE(t).unknownError);
        }
        setOpen(true);
      });
  };

  const handleLogin = (email: string, password: string): void => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate(PATCH.mainPage);
      })
      .catch((error) => {
        switch (error.code) {
          case ERROR_CODES_FIREBASE.wrongPassword:
            setError(ERROR_MESSAGE(t).wrongPassword);
            break;
          case ERROR_CODES_FIREBASE.userNotFound:
            setError(ERROR_MESSAGE(t).userNotFound);
            break;
          case ERROR_CODES_FIREBASE.invalidEmailFirebase:
            setError(ERROR_MESSAGE(t).invalidEmailFirebase);
            break;
          default:
            setError(ERROR_MESSAGE(t).unknownError);
            break;
        }
        setOpen(true);
      });
  };

  const onSubmitForm = (data: ILoginForm): void => {
    const { email, password } = data;

    if (registration) {
      handleRegister(email, password);
    } else {
      handleLogin(email, password);
    }
  };

  const redirectToSignInPage = (): void => {
    navigate(PATCH.signInPage);
  };

  const redirectToSignUpPage = (): void => {
    navigate(PATCH.signUpPage);
  };

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: 400,
        gap: 2,
        my: 2,
        mx: 'auto',
        color: 'primary.dark',
        height: '70vh',
      }}
    >
      <Typography component="h2" variant="h5" align="center" sx={{ color: 'primary.dark' }}>
        {registration ? t('formAuthorization.signUp') : t('formAuthorization.signIn')}
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          mx: 'auto',
          width: '100%',
        }}
      >
        <CssTextField
          error={!!errors.email}
          label={t('formAuthorization.labelEmail')}
          fullWidth
          helperText={errors?.email?.message}
          {...register('email', {
            required: ERROR_MESSAGE(t).emptyLine,
            pattern: { value: REGEX_EMAIL, message: ERROR_MESSAGE(t).invalidEmail },
          })}
        />
        <CssTextField
          error={!!errors.password}
          label={t('formAuthorization.labelPassword')}
          type="password"
          fullWidth
          helperText={errors?.password?.message}
          {...register('password', {
            required: ERROR_MESSAGE(t).emptyLine,
            pattern: { value: REGEX_PASSWORD, message: ERROR_MESSAGE(t).invalidPassword },
          })}
        />
        {registration && (
          <CssTextField
            error={!!errors.repeatPassword}
            label={t('formAuthorization.labelRepeatPassword')}
            type="password"
            fullWidth
            helperText={errors?.repeatPassword?.message}
            {...register('repeatPassword', {
              required: ERROR_MESSAGE(t).emptyLine,
              validate: (value) => value === watch('password') || ERROR_MESSAGE(t).passwordMismatch,
            })}
          />
        )}
        <Button variant="contained" fullWidth onClick={handleSubmit(onSubmitForm)}>
          {registration ? t('formAuthorization.signUp') : t('formAuthorization.signIn')}
        </Button>
      </Box>
      {registration ? (
        <Link
          component="button"
          onClick={redirectToSignInPage}
          underline="hover"
          sx={{ color: 'primary.dark', outlineColor: 'primary.dark' }}
        >
          {t('formAuthorization.navigateToSignInLink')}
        </Link>
      ) : (
        <Link
          component="button"
          underline="hover"
          onClick={redirectToSignUpPage}
          sx={{ color: 'primary.dark', outlineColor: 'primary.dark' }}
        >
          {t('formAuthorization.createAccountLink')}
        </Link>
      )}
      <Snackbar
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        sx={{
          marginBottom: 10,
        }}
      >
        <Alert onClose={handleClose} variant="filled" severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export { FormAuthorization };
