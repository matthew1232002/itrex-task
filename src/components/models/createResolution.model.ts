export interface IAddResolution {
  resolution: string;
  appointmentID: string;
}

export interface IAddResolutionResponse {
  id: string;
  appointment_id: string;
  next_appointment_date: string;
  resolution: string;
}
