import * as Yup from 'yup';

export const schema = Yup.object({
  time: Yup.string().required('Time is required field'),
  occupation: Yup.string().required('Occupation is required field'),
  doctor: Yup.string().required('Doctor is required field'),
  reason: Yup.string().required('Reason is required field').min(4, 'Must be at least 4 characters'),
}).required();
