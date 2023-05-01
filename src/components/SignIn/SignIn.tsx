import { useAppDispatch } from '../../hooks/redux';
import { setUser } from '../../store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { ILoginForm } from '../../types';
import { useNavigate } from 'react-router-dom';

const SignIn = (props: { handelRegistration: () => void }): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string): void => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: await user.getIdToken(),
          })
        );
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const onSubmitForm = (data: ILoginForm): void => {
    const { email, password } = data;

    handleLogin(email, password);
  };

  return (
    <div>
      <h2>Sign in to GraphQL Playground</h2>
      <form>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="text"
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
            {...register('password', {
              required: 'empty',
            })}
          />
        </div>
        {errors.password && <span>{errors.password.message}</span>}
        <button onClick={handleSubmit(onSubmitForm)}>Sign In</button>
      </form>
      <div>
        <span>New to GraphQL Playground?</span>
        <span onClick={props.handelRegistration}>Create an account.</span>
      </div>
    </div>
  );
};

export { SignIn };
