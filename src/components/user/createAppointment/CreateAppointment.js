import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import ReactCalendar from './Calendar/Calendar';
import {
  StyledButton,
  StyledContainer, StyledCrumbs,
  StyledFooter,
  StyledSubtitle,
  StyledWrapper,
} from './CreateAppointment.styled';
import Breadcrumb from './BreadCrumbs/Breadcrumb';
import Title from './title/Title';
import FormPatient from './Form/FormPatient';
import Checkboxes from './checkboxes/Checkboxes';
import useActions from '../../../hooks/useActions';
import routes from '../../../routes/routes';

const CreateAppointment = () => {
  const history = useHistory();
  const { createAppointment } = useActions();

  const crumbs = ['Doctors', 'Make an appointment'];
  const [calendarData, setCalendarData] = useState();
  const [time, setTime] = useState();
  const [formData, setFormData] = useState();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (calendarData && time && formData.doctorId && formData.reason) {
      setDisabled(false);
    }
  }, [calendarData, time, formData]);

  const selected = (crumb) => {
    if (crumb === 'Doctors') {
      history.replace(routes.userAppointmentsPage);
    }
  };

  const calendarHandler = (calendarDataValue) => {
    setCalendarData(calendarDataValue);
  };

  const timeHandler = (timeValue) => {
    setTime(timeValue);
  };

  const formDataHandler = (formValues) => {
    if (formValues.doctorId) {
      setFormData(formValues);
    }
  };

  const onCreateHandler = () => {
    const obj = {
      date: time,
      reason: formData.reason,
      note: formData.note,
      doctorID: formData.doctorId,
    };

    createAppointment(obj);
    history.replace(routes.userAppointmentsPage);
  };

  return (
    <StyledWrapper data-testid='test'>
      <StyledCrumbs>
        <Breadcrumb crumbs={crumbs} selected={selected} />
      </StyledCrumbs>
      <StyledSubtitle>Make an appointment</StyledSubtitle>
      <StyledFooter>
        <StyledContainer width="400px">
          <Title text="Choose a day for an appointment" number="1" />
          <ReactCalendar onChangeData={calendarHandler} />
        </StyledContainer>
        <StyledContainer width="464px">
          <Title text="Select an available timeslot" number="2" />
          <Checkboxes
            onChangeTime={timeHandler}
            dataIso={calendarData}
            formData={formData}
          />
        </StyledContainer>
        <StyledContainer width="624px">
          <Title last text="Select a doctor and define the reason of your visit" number="3" />
          <FormPatient onChangeFormData={formDataHandler} />
          <StyledButton disabled={disabled} onClick={onCreateHandler} data-testid='submit'>Submit</StyledButton>
        </StyledContainer>
      </StyledFooter>
    </StyledWrapper>
  );
};

export default CreateAppointment;
