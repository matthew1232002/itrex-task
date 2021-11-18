import Checkbox from './Checkbox';

const Checkboxes = ({ onChangeTime }) => {
  const data = [
    '12:00 am',
    '1:00 pm',
    '2:00 pm',
    '3:00 pm',
    '4:00 pm',
    '5:00 pm',
    '6:00 pm',
    '7:00 pm',
    '8:00 pm',
    '9:00 pm',
  ];

  return (
    <>
      {data.map((item) => (
        <Checkbox key={item} time={item} onChangeTime={(time) => onChangeTime(time)} />
      ))}
    </>
  );
};

export default Checkboxes;
