import {
  useForm, FormProvider, SubmitHandler, FieldValues,
} from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import Calendar from './Calendar/Calendar';
import SelectOccupation from './select/SelectOccupation';
import SelectDoctor from './select/SelectDoctor';
import Input from './input/Input';
import Checkboxes from './checkboxes/Checkboxes';
import Title from './title/Title';
import {
  StyledBtnContainer, StyledLabel, StyledWrapper, StyledContainer,
  StyledInputWrapper, StyledFormContainer, StyledCrumbs, StyledSubtitle,
} from './CreateAppointment.styled';
import Button from './button/Button';
import Breadcrumb from './BreadCrumbs/Breadcrumb';
import routes from '../../../routes/routes';
import useActions from '../../../hooks/useActions';
import { schema } from './schema/ValidationShema';

const CreateAppointment = () => {
  const history = useHistory();
  const { createAppointment } = useActions();
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });
  const crumbs = ['Doctors', 'Make an appointment'];
  const {
    handleSubmit, control,
    register,
  } = methods;

  const selected = (crumb: string) => {
    if (crumb === 'Doctors') {
      history.replace(routes.userAppointmentsPage);
    }
  };

  const submitHandler: SubmitHandler<FieldValues> = (values) => {
    const obj = {
      date: values.date,
      reason: values.reason,
      note: values.note,
      doctorID: values.doctor,
    };

    createAppointment(obj);
  };
  return (
    <StyledWrapper>
      <StyledCrumbs>
        <Breadcrumb crumbs={crumbs} selected={selected} />
      </StyledCrumbs>
      <StyledSubtitle>Make an appointment</StyledSubtitle>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <StyledFormContainer>
            <StyledContainer width="400px">
              <Title last={false} text="Choose a day for an appointment" number="1" />
              <Calendar control={control} name="date" />
            </StyledContainer>
            <StyledContainer width="464px">
              <Title last={false} text="Select an available timeslot" number="2" />
              <Checkboxes />
            </StyledContainer>
            <StyledContainer width="624px">
              <Title last text="Select a doctor and define the reason of your visit" number="3" />
              <StyledInputWrapper>
                <StyledLabel>Occupation</StyledLabel>
                <SelectOccupation control={control} name="occupation" />
              </StyledInputWrapper>
              <StyledInputWrapper>
                <StyledLabel>Doctor’s Name</StyledLabel>
                <SelectDoctor control={control} name="doctor" />
              </StyledInputWrapper>
              <StyledInputWrapper>
                <StyledLabel>Reason for the visit</StyledLabel>
                <Input placeholder="Leave a reason" register={register} name="reason" />
              </StyledInputWrapper>
              <StyledInputWrapper>
                <StyledLabel>Note</StyledLabel>
                <Input placeholder="Leave a note if needed" register={register} name="note" />
              </StyledInputWrapper>
            </StyledContainer>
          </StyledFormContainer>
          <StyledBtnContainer>
            <Button />
          </StyledBtnContainer>
        </form>
      </FormProvider>
    </StyledWrapper>
  );
};

export default CreateAppointment;
