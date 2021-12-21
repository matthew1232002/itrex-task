export interface IPatient {
  id: string,
  reason: string,
  note: string,
  patient_id?: string,
  doctor_id?: string,
  visit_date: string,
  status: string,
  patient: {
    last_name: string,
    first_name: string,
    id: string,
    photo: string
  }
}
