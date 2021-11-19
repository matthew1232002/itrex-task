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
import useRequest from '../../../hooks/useActions';

const CreateAppointment = () => {
  const history = useHistory();
  const { createAppointment } = useRequest();

  const crumbs = ['Doctors', 'Make an appointment'];
  const [calendarData, setCalendarData] = useState();
  const [time, setTime] = useState();
  const [formData, setFormData] = useState();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (calendarData && time && formData) {
      setDisabled(false);
    }
  });

  const selected = (crumb) => {
    if (crumb === 'Doctors') {
      history.replace('/user-appointments');
    }
  };

  const calendarHandler = (calendarDataValue) => {
    setCalendarData(calendarDataValue);
  };

  const timeHandler = (timeValue) => {
    setTime(timeValue);
  };

  const formDataHandler = (formValues) => {
    if (formValues.occupation && formValues.doctorName && formValues.reason) {
      setFormData(formValues);
    }
  };

  const onCreateHandler = () => {
    const obj = {
      calendarData,
      time,
      occupation: formData.occupation,
      doctorName: formData.doctorName,
      reason: formData.reason,
      note: formData.note,
    };

    createAppointment(obj);
    history.replace('/user-appointments');
  };

  return (
    <StyledWrapper>
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
          <Checkboxes onChangeTime={timeHandler} />
        </StyledContainer>
        <StyledContainer width="624px">
          <Title last text="Select a doctor and define the reason of your visit" number="3" />
          <FormPatient onChangeFormData={formDataHandler} />
          <StyledButton disabled={disabled} onClick={onCreateHandler}>Submit</StyledButton>
        </StyledContainer>
      </StyledFooter>
    </StyledWrapper>
  );
};

export default CreateAppointment;
