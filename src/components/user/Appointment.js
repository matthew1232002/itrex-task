import React from 'react';
import {
    StyledAvatar, StyledDescription, StyledDoctorPosition,
    StyledFooter,
    StyledHeader,
    StyledInfo,
    StyledName, StyledPatient,
    StyledTime
} from "./Appointment.styled";
import DocAvatar from '../../assets/DocAvatar.png';
import More from '../../assets/patient-more.svg';

const Appointment = () => {
    return (
        <StyledPatient>
            <StyledHeader>
                <StyledInfo>
                    <StyledAvatar><img alt='avatar' src={DocAvatar}/></StyledAvatar>
                    <StyledName>
                        <p>Joe Milton</p>
                        <StyledDoctorPosition>Therapist</StyledDoctorPosition>
                    </StyledName>
                </StyledInfo>
                <div>
                    <img alt='more' src={More}/>
                </div>
            </StyledHeader>
            <StyledFooter>
                <StyledTime>Thu Sept 10, 2021 4 pm – 5 pm</StyledTime>
                <StyledDescription>Headache, pant</StyledDescription>
            </StyledFooter>
        </StyledPatient>
    );
};

export default Appointment;