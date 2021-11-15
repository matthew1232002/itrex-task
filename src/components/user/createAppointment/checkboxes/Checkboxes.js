import React from 'react';
import Checkbox from './Checkbox';

const Checkboxes = (props) => (
  <>
    <Checkbox time="12:00 am" onChangeTime={(time) => props.onChangeTime(time)} />
    <Checkbox time="1:00 pm" onChangeTime={(time) => props.onChangeTime(time)} />
    <Checkbox time="2:00 pm" onChangeTime={(time) => props.onChangeTime(time)} />
    <Checkbox time="3:00 pm" onChangeTime={(time) => props.onChangeTime(time)} />
    <Checkbox time="4:00 pm" onChangeTime={(time) => props.onChangeTime(time)} />
    <Checkbox time="5:00 pm" onChangeTime={(time) => props.onChangeTime(time)} />
    <Checkbox time="6:00 pm" onChangeTime={(time) => props.onChangeTime(time)} />
    <Checkbox time="7:00 pm" onChangeTime={(time) => props.onChangeTime(time)} />
    <Checkbox time="8:00 pm" onChangeTime={(time) => props.onChangeTime(time)} />
    <Checkbox time="9:00 pm" onChangeTime={(time) => props.onChangeTime(time)} />
  </>
);

export default Checkboxes;
