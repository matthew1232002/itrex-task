import { useQuery } from 'react-query';
import { getDoctorsBySpecializations } from '../../store/user/patientOperations';

export function useFetchDoctors(specializationId: string) {
  return useQuery('doctors',
    () => getDoctorsBySpecializations(specializationId),
    { enabled: false });
}
