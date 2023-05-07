import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { ILoginForm } from '../../types';
import { useNavigate } from 'react-router-dom';
import { ERROR_MESSAGE, PATCH, REGEX_EMAIL, REGEX_PASSWORD } from '../../constants';
import { Box, Button, Link, TextField, Typography, styled } from '@mui/material';

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
  const { registration } = props;

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
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const handleRegister = (email: string, password: string): void => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/main');
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  const handleLogin = (email: string, password: string): void => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/main');
      })
      .catch((error) => {
        console.log(error.code, error.message);
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
      display="flex"
      flexDirection="column"
      justifyContent="center"
      width={400}
      gap={2}
      my={2}
      mx="auto"
      color="primary.dark"
      height="70vh"
    >
      <Typography component="h2" variant="h5" align="center" sx={{ color: 'primary.dark' }}>
        {registration ? 'Sign up' : 'Sign In'}
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
          label="Email"
          fullWidth
          helperText={errors?.email?.message}
          {...register('email', {
            required: ERROR_MESSAGE.emptyLine,
            pattern: { value: REGEX_EMAIL, message: ERROR_MESSAGE.invalidEmail },
          })}
        />
        <CssTextField
          error={!!errors.password}
          label="Password"
          type="password"
          fullWidth
          helperText={errors?.password?.message}
          {...register('password', {
            required: ERROR_MESSAGE.emptyLine,
            pattern: { value: REGEX_PASSWORD, message: ERROR_MESSAGE.invalidPassword },
          })}
        />
        {registration && (
          <CssTextField
            error={!!errors.repeatPassword}
            label="Repeat password"
            type="password"
            fullWidth
            helperText={errors?.repeatPassword?.message}
            {...register('repeatPassword', {
              required: ERROR_MESSAGE.emptyLine,
              validate: (value) => value === watch('password') || ERROR_MESSAGE.passwordMismatch,
            })}
          />
        )}
        <Button variant="contained" fullWidth onClick={handleSubmit(onSubmitForm)}>
          {registration ? 'Sign Up' : 'Sign In'}
        </Button>
      </Box>
      {registration ? (
        <Link
          component="button"
          onClick={redirectToSignInPage}
          underline="hover"
          sx={{ color: 'primary.dark', outlineColor: 'primary.dark' }}
        >
          Already have an account? Sign in →
        </Link>
      ) : (
        <Link
          component="button"
          underline="hover"
          onClick={redirectToSignUpPage}
          sx={{ color: 'primary.dark', outlineColor: 'primary.dark' }}
        >
          Don`t have an account? Create an account →
        </Link>
      )}
    </Box>
  );
};

export { FormAuthorization };
