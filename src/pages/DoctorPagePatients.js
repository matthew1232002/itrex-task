import React from 'react';
import DoctorLayout from "../components/layout/DoctorLayout";
import DoctorPatients from "../components/doctor/DoctorPatients";

const DoctorPagePatients = () => {
    return (
        <DoctorLayout>
            <DoctorPatients/>
        </DoctorLayout>
    );
};

export default DoctorPagePatients;