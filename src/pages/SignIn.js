import React from 'react';

import LoginLayout from "../components/layout/LoginLayout";
import SignInForm from "../components/forms/SignInForm";

const SignIn = () => {
    return (
      <LoginLayout>
          <SignInForm />
      </LoginLayout>

    );
};

export default SignIn;