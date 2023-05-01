const SignUp = (props: { handelRegistration: () => void }): JSX.Element => (
  <div>
    <h2>Sign up</h2>
    <form>
      <div>
        <label htmlFor="email">Email address</label>
        <input type="text" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" />
      </div>
      <div>
        <label htmlFor="repeat-password">Repeat password</label>
        <input type="text" name="repeat-password" />
      </div>
      <input type="submit" value="Sign Up" />
    </form>
    <div>
      <span>Already have an account?</span>
      <span onClick={props.handelRegistration}>Sign in →</span>
    </div>
  </div>
);

export { SignUp };
