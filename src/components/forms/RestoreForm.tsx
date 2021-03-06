import { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Header from './header/header';
import InputField from './input/InputField';
import { StyledEmail, StyledInputs, StyledText } from './RestoreForm.styled';
import { StyledForm, StyledSidebar } from './LoginPages.styled';
import Button from './button/Button';

type RestoreType = {
  email: string
};

const RestoreForm = () => {
  const [isSent, setIsSent] = useState(false);
  const initialValues: RestoreType = {
    email: '',
  };
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={() => (
        setIsSent(true)
      )}
    >
      {() => (
        <StyledSidebar paddingTop="267px">
          <Header text="Restore Password" />
          {isSent && (
            <StyledText>
              An email has been sent to
              <StyledEmail>example@exam.com</StyledEmail>
              .
              Check your inbox, and click the reset link provided.
            </StyledText>
          )}
          {!isSent && (
            <StyledText>
              Please use your email address, and we’ll send you
              the link to reset your password
            </StyledText>
          )}
          {!isSent && (
            <StyledForm>
              <StyledInputs>
                <InputField type="email" placeholder="Email" name="email" testId="restore" />
              </StyledInputs>
              <Button text="Send Reset Link" />
            </StyledForm>
          )}
        </StyledSidebar>
      )}
    </Formik>
  );
};

export default RestoreForm;
