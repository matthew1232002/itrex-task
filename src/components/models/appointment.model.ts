export type AppointmentType = {
  visitDate: string,
  reason: string,
  note: string,
  doctor: {
    last_name: string,
    first_name: string,
    id: string,
    photo: string,
    specialization_name: string
  }
  id: string,
};

export type AppointmentFullInfo = AppointmentType & {
  patient_id: string,
  doctor_id: string,
  status: string,
  visit_date: string
};
