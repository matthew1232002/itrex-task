import React from 'react';
import * as Yup from "yup";
import {Formik} from "formik";
import Header from "./header/header";
import InputField from "./input/InputField";
import Footer from "./footer/footer";
import {StyledInputs, StyledLink} from "./SignInForm.styled";
import {StyledForm, StyledSidebar} from "./LoginPages.styled";
import Button from "./button/Button";

const SignInForm = () => {
    const validate = Yup.object({
        email: Yup.string().email("Email is invalid").required('Email is required'),
        password: Yup.string().min(6, "Password must be at least 6 characters").required('Password is required'),
    })

    return (
        <Formik initialValues={{
            email: '',
            password: '',
        }} validationSchema={validate}
                onSubmit={values => (
                    values
                )}
        >
            {formik => (
                <StyledSidebar>
                    <Header text='Sign In'/>
                    <StyledForm>
                        <StyledInputs>
                            <InputField type='email' placeholder='Email' name="email"/>
                            <InputField type='password' placeholder='Password' name="password"/>
                        </StyledInputs>
                        <Button text='Sign In'/>
                        <StyledLink to='/restore'>Forgot Password?</StyledLink>
                    </StyledForm>
                    <Footer text="Don’t have an account?" path="/sign-up" link="Sign up"/>
                </StyledSidebar>
            )}
        </Formik>
    );
};

export default SignInForm;