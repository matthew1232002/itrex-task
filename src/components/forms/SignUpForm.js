import React from 'react';

import Header from "./header/header";
import {Formik} from "formik";
import InputField from "./input/InputField";
import Footer from "./footer/footer";
import * as Yup from "yup";
import {StyledInputs} from "./SignUpForm.styled";
import {StyledForm, StyledSidebar} from "./LoginPages.styled";
import Button from "./button/Button";

const SignUpForm = () => {
    const validate = Yup.object({
        firstName: Yup.string().max(15, "Must be 15 characters or less").required('First name is required'),
        lastName: Yup.string().max(20, "Must be 20 characters or less").required('Last name is required'),
        email: Yup.string().email("Email is invalid").required('Email is required'),
        password: Yup.string().min(6, "Password must be at least 6 characters").required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Password must match").required('Confirm password is required'),
    })
    return (
        <Formik initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }}
                validationSchema={validate}
                onSubmit={values => (
                    values
                )}
        >
            {formik => (
                <StyledSidebar>
                    <Header text='Sign Up'/>
                    <StyledForm>
                        <StyledInputs>
                            <InputField type='text' placeholder='First Name' name="firstName"/>
                            <InputField type='text' placeholder='Last Name' name="lastName"/>
                            <InputField type='email' placeholder='Email' name="email"/>
                            <InputField type='password' placeholder='Password' name="password"/>
                            <InputField type='password' placeholder='Confirm Password' name="confirmPassword"/>
                        </StyledInputs>
                        <Button text='Sign Up'/>
                    </StyledForm>
                    <Footer text="Already have an account?" path="/sign-in" link="Sign in"/>
                </StyledSidebar>
            )}
        </Formik>
    );
};

export default SignUpForm;