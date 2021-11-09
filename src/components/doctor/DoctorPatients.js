import React from 'react';

import {StyledPatientsList} from "./DoctorPatients.styled";
// import EmptyList from "./EmptyList";
import Patient from "./Patient";

const DoctorPatients = () => {
    return (
        <StyledPatientsList>

            {/*<EmptyList />*/}

            <Patient/>

        </StyledPatientsList>
    );
};

export default DoctorPatients;