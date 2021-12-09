import { Formik } from 'formik';
import * as Yup from 'yup';
import Header from './header/header';
import InputField from './input/InputField';
import Footer from './footer/footer';
import { StyledInputs } from './SignUpForm.styled';
import { StyledForm, StyledSidebar } from './LoginPages.styled';
import Button from './button/Button';
import useActions from '../../hooks/useActions';
import { RegisterType } from '../models/register.model';

type SignUpType = RegisterType & { confirmPassword: string };

const SignUpForm = () => {
  const { registerUser } = useActions();
  const initialValues: SignUpType = {
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    confirmPassword: '',
  };
  const onSubmitHandler = (values: SignUpType) => {
    const obj = {
      userName: values.userName,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
    };
    registerUser(obj);
  };
  const validate = Yup.object({
    firstName: Yup.string().max(15, 'Must be 15 characters or less').required('First name is required'),
    lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Last name is required'),
    userName: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm password is required'),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={onSubmitHandler}
    >
      {() => (
        <StyledSidebar>
          <Header text="Sign Up" />
          <StyledForm>
            <StyledInputs>
              <InputField type="text" placeholder="First Name" name="firstName" testId="firstName" />
              <InputField type="text" placeholder="Last Name" name="lastName" testId="lastName" />
              <InputField type="email" placeholder="Email" name="userName" testId="userNameSignUp" />
              <InputField type="password" placeholder="Password" name="password" testId="passwordSignUp" />
              <InputField type="password" placeholder="Confirm Password" name="confirmPassword" testId="confirmPassword" />
            </StyledInputs>
            <Button text="Sign Up" />
          </StyledForm>
          <Footer text="Already have an account?" path="/sign-in" link="Sign in" />
        </StyledSidebar>
      )}
    </Formik>
  );
};

export default SignUpForm;
