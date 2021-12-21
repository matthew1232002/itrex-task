import { useEffect, useState } from 'react';
import Checkbox from './Checkbox';
import { getAvailableTime } from '../../../../store/user/patientOperations';

type CheckboxesProps = {
  onChangeTime: (time: string) => void
  formData: {
    doctorId: string
  }
  dataIso?: string
};

const Checkboxes = ({ onChangeTime, formData, dataIso }: CheckboxesProps) => {
  const [availableHours, setAvailableHours] = useState<Array<string>>();
  useEffect(() => {
    if (formData.doctorId && dataIso) {
      getAvailableTime(formData.doctorId, dataIso)
        .then((response) => setAvailableHours(response.data));
    }
  }, [formData, dataIso]);

  return (
    <>
      {!availableHours && <p>Chose the doctor</p>}
      {availableHours?.length === 0 && <p>No available time</p>}
      {availableHours
            && availableHours.map((hour) => (
              <Checkbox
                key={hour}
                time={hour}
                onChangeTime={(time: string) => onChangeTime(time)}
              />
            ))}
    </>
  );
};

export default Checkboxes;
