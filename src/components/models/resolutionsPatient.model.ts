export interface IResolutionsPatient {
  id: string,
  appointment_id: string,
  next_appointment_date: string,
  resolution: string,
  visit_date: string,
  doctor: {
    last_name: string,
    first_name: string,
    id: string,
    photo: string,
    specialization_nam: string,
  }
}
