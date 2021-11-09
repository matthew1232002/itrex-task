import React, {useState} from 'react';

import {ErrorMessage, useField} from "formik";
import {StyledEye, StyledInput, StyledWrapper} from "./inputField.styled";
import Eye from '../../../assets/eye1.png';

const InputField = ({type, placeholder, ...props}) => {
    const [inputEyeClasses, setInputEyeClasses] = useState({})
    const [field, meta] = useField(props);

    const errorClass = meta.touched && meta.error? {border: "1px solid #F6657F"}: {}

    const togglePassword = (e) => {
        if (e.target.previousElementSibling.type === 'password') {
            e.target.previousElementSibling.type = 'text'
            setInputEyeClasses(prev => prev = {
                width: "29px",
                height: "29px",
                background: `url(${Eye})`,
            })
        }else if (e.target.previousElementSibling.type === 'text') {
            e.target.previousElementSibling.type = 'password'
            setInputEyeClasses(prev => prev = {})
        }
    }
    return (
        <StyledWrapper>
            <StyledInput type={type}
                   placeholder={placeholder}
                   autoComplete='off'
                   {...field}
                   {...props}
                   style={errorClass}
            />
            {(field.name === 'password' || field.name === 'confirmPassword') && <StyledEye style={inputEyeClasses} onClick={togglePassword}/>}
            <ErrorMessage component='p' name={field.name}/>
        </StyledWrapper>
    );
};

export default InputField;