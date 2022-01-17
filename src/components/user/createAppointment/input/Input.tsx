import {
  ErrorMessage, FormikValues, useField, useFormikContext,
} from 'formik';
import { StyledInput } from './Input.styled';
import { StyledErrorMessage } from '../error/ErrorMessage.styled';

interface IAuthTextInputProps {
  name: string;
  id: string;
  placeholder: string;
}

const Input = ({ name, id, placeholder }: IAuthTextInputProps) => {
  const [field, meta] = useField(id);
  const { values } = useFormikContext<FormikValues>();

  return (
    <>
      <StyledInput
        placeholder={placeholder}
        {...field}
        name={name}
        id={id}
      />
      <ErrorMessage name={field.name}>
        {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
      </ErrorMessage>
      {values.occupation
                && values.doctorName && meta.error && !meta.touched
                && <StyledErrorMessage>Reason is required field</StyledErrorMessage>}
    </>

  );
};

export default Input;
