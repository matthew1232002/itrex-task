import React from 'react';
import UserLayout from "../components/layout/UserLayout";
import UserAppointments from "../components/user/UserAppointments";

const UserAppointmentsPage = () => {
    return (
        <UserLayout>
            <UserAppointments />
        </UserLayout>
    );
};

export default UserAppointmentsPage;