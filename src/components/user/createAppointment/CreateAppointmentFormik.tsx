import { Formik, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import CalendarFormik from './Calendar/CalendarFormik';
import {
  StyledBtnContainer,
  StyledContainer,
  StyledCrumbs,
  StyledForm,
  StyledFormContainer,
  StyledInputWrapper, StyledLabel, StyledSubtitle, StyledWrapper,
} from './CreateAppointmentFormik.styled';
import SelectOccupations from './select/SelectOccupation';
import Input from './input/Input';
import SelectDoctor from './select/SelectDoctor';
import CheckboxesFormik from './checkboxes/CheckboxesFormik';
import Breadcrumb from './BreadCrumbs/Breadcrumb';
import routes from '../../../routes/routes';
import { validationSchema } from './schema/validationSchema';
import Title from './title/Title';
import Button from './button/Button';

interface IFormValues {
  date: string;
  time: string;
  occupation: string;
  doctorName: string;
  reason: string;
  note: string;
}

const CreateAppointmentFormik = () => {
  const history = useHistory();
  const crumbs = ['Doctors', 'Make an appointment'];

  const selected = (crumb: string) => {
    if (crumb === 'Doctors') {
      history.replace(routes.userAppointmentsPage);
    }
  };

  const initialValues = {
    date: '',
    time: '',
    occupation: '',
    doctorName: '',
    reason: '',
    note: '',
  };

  const submitHandler = (values: IFormValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {({ setFieldValue }) => (
        <StyledWrapper>
          <StyledCrumbs>
            <Breadcrumb crumbs={crumbs} selected={selected} />
          </StyledCrumbs>
          <StyledSubtitle>Make an appointment</StyledSubtitle>
          <StyledForm>
            <StyledFormContainer>
              <StyledContainer width="400px">
                <Title last={false} text="Choose a day for an appointment" number="1" />
                <Field name="date" id="date" component={CalendarFormik} />
              </StyledContainer>
              <StyledContainer width="464px">
                <Title last={false} text="Select an available timeslot" number="2" />
                <Field name="time" id="time" component={CheckboxesFormik} />
              </StyledContainer>
              <StyledContainer width="624px">
                <Title last text="Select a doctor and define the reason of your visit" number="3" />
                <StyledInputWrapper>
                  <StyledLabel>Occupation</StyledLabel>
                  <Field name="occupation" id="occupation" component={SelectOccupations} handleReset={setFieldValue} />
                </StyledInputWrapper>
                <StyledInputWrapper>
                  <StyledLabel>Doctor’s Name</StyledLabel>
                  <Field name="doctorName" id="doctorName" component={SelectDoctor} />
                </StyledInputWrapper>
                <StyledInputWrapper>
                  <StyledLabel>Reason for the visit</StyledLabel>
                  <Field name="reason" id="reason" type="text" component={Input} placeholder="Leave a reason" />
                </StyledInputWrapper>
                <StyledInputWrapper>
                  <StyledLabel>Note</StyledLabel>
                  <Field name="note" id="note" type="text" component={Input} placeholder="Leave a note if needed" />
                </StyledInputWrapper>
              </StyledContainer>
            </StyledFormContainer>
            <StyledBtnContainer>
              <Button />
            </StyledBtnContainer>
          </StyledForm>
        </StyledWrapper>
      )}
    </Formik>
  );
};

export default CreateAppointmentFormik;
