import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { ILoginForm } from '../../types';
import { useNavigate } from 'react-router-dom';
import { PATCH } from '../../constants';

const FormAuthorization = (props: { registration: boolean }): JSX.Element => {
  const navigate = useNavigate();
  const { registration } = props;

  const {
    register,
    handleSubmit,
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
    <div>
      <h2>Sign up</h2>
      <form>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            placeholder="Email"
            {...register('email', {
              required: 'empty',
            })}
          />
        </div>
        {errors.email && <span>{errors.email.message}</span>}
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            placeholder="Password"
            {...register('password', {
              required: 'empty',
            })}
          />
        </div>
        {errors.password && <span>{errors.password.message}</span>}
        {registration && (
          <div>
            <label htmlFor="repeatPassword">Repeat password</label>
            <input
              type="text"
              placeholder="Repeat Password"
              {...register('repeatPassword', {
                required: 'empty',
              })}
            />
          </div>
        )}
        {errors.repeatPassword && <span>{errors.repeatPassword.message}</span>}
        <button onClick={handleSubmit(onSubmitForm)}>{registration ? 'Sign Up' : 'Sign In'}</button>
      </form>
      {registration ? (
        <div>
          <span>Already have an account?</span>
          <span onClick={redirectToSignInPage}>Sign in →</span>
        </div>
      ) : (
        <div>
          <span>New to GraphQL Playground?</span>
          <span onClick={redirectToSignUpPage}>Create an account.</span>
        </div>
      )}
    </div>
  );
};

export { FormAuthorization };
