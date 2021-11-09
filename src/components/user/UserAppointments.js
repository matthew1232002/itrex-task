import React from 'react';
import {StyledAppointmentsList} from "./UserAppointmets.styled";
import Appointment from "./Appointment";

const UserAppointments = () => {
    return (
        <StyledAppointmentsList>
            <Appointment/>
        </StyledAppointmentsList>
    );
};

export default UserAppointments;