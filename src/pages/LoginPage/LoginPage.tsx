import { useState } from 'react';
import { SignIn } from '../../components/SignIn';
import { SignUp } from '../../components/SignUp';

const LoginPage = (): JSX.Element => {
  const [register, setRegister] = useState(false);

  const handelRegistration = (): void => setRegister(!register);

  return (
    <>
      {register && <SignUp handelRegistration={handelRegistration} />}
      {!register && <SignIn handelRegistration={handelRegistration} />}
    </>
  );
};

export { LoginPage };
