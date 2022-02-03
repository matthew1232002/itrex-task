import { useQuery } from 'react-query';
import { getAvailableTime } from '../../store/user/patientOperations';

export function useFetchTimeSlots(doctorId: string, date: string) {
  return useQuery('time', () => getAvailableTime(doctorId, date), { enabled: false });
}
