import { useAppDispatch } from '../../hooks/redux';
import { setUser } from '../../store/slices/userSlice';

const SignIn = (props: { handelRegistration: () => void }): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Sign in to GraphQL Playground</h2>
      <form>
        <div>
          <label htmlFor="email">Email address</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" name="password" />
        </div>
        <input type="submit" value="Sign In" />
      </form>
      <div>
        <span>New to GraphQL Playground?</span>
        <span onClick={props.handelRegistration}>Create an account.</span>
      </div>
    </div>
  );
};

export { SignIn };
