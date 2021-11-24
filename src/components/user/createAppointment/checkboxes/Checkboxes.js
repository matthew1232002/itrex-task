import { useEffect, useState } from 'react';
import Checkbox from './Checkbox';
import { getAvailableTime } from '../../../../store/user/patientOperations';

const Checkboxes = ({ onChangeTime, formData, dataIso }) => {
  const [availableHours, setAvailableHours] = useState(null);
  useEffect(() => {
    if (formData && dataIso) {
      getAvailableTime(formData.doctorId, dataIso)
        .then((response) => setAvailableHours(response.data));
    }
  }, [formData, dataIso]);

  return (
    <>
      {!availableHours && <p>Chose the doctor</p>}
      {availableHours
            && availableHours.map((hour) => (
              <Checkbox
                key={hour}
                time={hour}
                onChangeTime={(time) => onChangeTime(time)}
              />
            ))}
    </>
  );
};

export default Checkboxes;
