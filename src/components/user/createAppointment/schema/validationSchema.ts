import * as Yup from 'yup';

export const validationSchema = Yup.object({
  date: Yup.string().required(),
  time: Yup.string().required(),
  occupation: Yup.string().required(),
  doctorName: Yup.string().required(),
  reason: Yup.string().min(4).required('Reason is required field'),
});
