import { useQuery } from 'react-query';
import { getAllSpecializations } from '../../store/user/patientOperations';

export function useFetchOccupations() {
  return useQuery('occupations', getAllSpecializations);
}
