export type AddAppointmentType = {
  date: string,
  reason: string,
  note: string,
  doctorID: string
};

export type AddAppointmentResponseType = {
  id: string,
  patient_id: string,
  doctor_id: string,
  visit_date: string,
  reason: string,
  note: string,
  status: string
};
