import React from 'react';

import LoginLayout from "../components/layout/LoginLayout";
import SignUpForm from "../components/forms/SignUpForm";

const SignUp = () => {
    return (
       <LoginLayout>
           <SignUpForm/>
       </LoginLayout>
    );
};

export default SignUp;