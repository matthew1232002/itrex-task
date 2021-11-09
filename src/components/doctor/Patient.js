import React from 'react';

import {
    StyledAvatar, StyledDescription,
    StyledFooter,
    StyledHeader,
    StyledInfo,
    StyledName,
    StyledPatient,
    StyledStatus, StyledTime
} from "./Patient.styled";

const Patient = () => {
    return (
        <StyledPatient>
            <StyledHeader>
                <StyledInfo>
                    <StyledAvatar><img alt='avatar'/></StyledAvatar>
                    <StyledName>
                        <p>Jane Cooper</p>
                        <StyledStatus>Appointment is confirmed</StyledStatus>
                    </StyledName>
                </StyledInfo>
                <div>
                    <img alt='more'/>
                </div>
            </StyledHeader>
            <StyledFooter>
                <StyledTime>Thu Sept 10, 2021 4 pm – 5 pm</StyledTime>
                <StyledDescription>We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels</StyledDescription>
            </StyledFooter>
        </StyledPatient>
    );
};

export default Patient;