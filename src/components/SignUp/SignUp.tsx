import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { ILoginForm } from '../../types';
import { useAppDispatch } from '../../hooks/redux';
import { setUser } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const SignUp = (props: { handelRegistration: () => void }): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const onSubmitForm = (data: ILoginForm): void => {
    const { email, password } = data;

    handleRegister(email, password);
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
        {errors.repeatPassword && <span>{errors.repeatPassword.message}</span>}
        <button onClick={handleSubmit(onSubmitForm)}>Sign Up</button>
      </form>
      <div>
        <span>Already have an account?</span>
        <span onClick={props.handelRegistration}>Sign in →</span>
      </div>
    </div>
  );
};

export { SignUp };
