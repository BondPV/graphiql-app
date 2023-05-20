import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Link,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import {
  AuthError,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/Api/firebase';
import {
  ERROR_CODES_FIREBASE,
  ERROR_MESSAGE,
  REGEX_EMAIL,
  REGEX_PASSWORD,
  ROUTE,
  SUCCESS_MESSAGE,
} from '@/constants';
import { useAppDispatch } from '@/hooks/redux';
import { setAlertMsg } from '@/redux/slice';
import { ILoginForm } from '@/types';

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

const FormAuthorization = ({ registration }: { registration: boolean }): JSX.Element => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();

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

  const handleRegister = async (email: string, password: string): Promise<void> => {
    try {
      const auth = getAuth();
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      addDoc(collection(db, 'users'), {
        uid: user.uid,
        name,
        authProvider: 'local',
        email,
      });
      dispatch(setAlertMsg({ message: SUCCESS_MESSAGE(t).registration, severity: 'success' }));
      navigate('/main');
    } catch (error) {
      const { code } = error as AuthError;

      if (code === ERROR_CODES_FIREBASE.emailAlreadyInUse) {
        dispatch(setAlertMsg({ message: ERROR_MESSAGE(t).emailAlreadyInUse }));
      } else {
        dispatch(setAlertMsg({ message: ERROR_MESSAGE(t).unknownError }));
      }
    }
  };

  const handleLogin = async (email: string, password: string): Promise<void> => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(setAlertMsg({ message: SUCCESS_MESSAGE(t).authorization, severity: 'success' }));
      navigate(ROUTE.mainPage);
    } catch (error) {
      const { code } = error as AuthError;

      switch (code) {
        case ERROR_CODES_FIREBASE.wrongPassword:
          dispatch(setAlertMsg({ message: ERROR_MESSAGE(t).wrongPassword }));
          break;
        case ERROR_CODES_FIREBASE.userNotFound:
          dispatch(setAlertMsg({ message: ERROR_MESSAGE(t).userNotFound }));
          break;
        case ERROR_CODES_FIREBASE.invalidEmailFirebase:
          dispatch(setAlertMsg({ message: ERROR_MESSAGE(t).invalidEmailFirebase }));
          break;
        default:
          dispatch(setAlertMsg({ message: ERROR_MESSAGE(t).unknownError }));
          break;
      }
    }
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
    navigate(ROUTE.signInPage);
  };

  const redirectToSignUpPage = (): void => {
    navigate(ROUTE.signUpPage);
  };

  const handleClickShowPassword = (): void => setShowPassword(!showPassword);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        my: 2,
        mx: '2',
        color: 'primary.dark',
        height: '70vh',
      }}
    >
      <Avatar sx={{ bgcolor: 'primary.dark' }} />
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
          type={showPassword ? 'text' : 'password'}
          fullWidth
          helperText={errors?.password?.message}
          {...register('password', {
            required: ERROR_MESSAGE(t).emptyLine,
            pattern: { value: REGEX_PASSWORD, message: ERROR_MESSAGE(t).invalidPassword },
          })}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {registration && (
          <CssTextField
            error={!!errors.repeatPassword}
            label={t('formAuthorization.labelRepeatPassword')}
            type={showPassword ? 'text' : 'password'}
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
    </Container>
  );
};

export { FormAuthorization };
