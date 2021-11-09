import React, {Suspense} from "react";
import {Route, Switch, Redirect} from 'react-router-dom';

import LoadingSpinner from './components/UI/LoadingSpinner';
import DoctorPagePatients from "./pages/DoctorPagePatients";
import UserAppointmentsPage from "./pages/UserAppointmentsPage";

const SignUp = React.lazy(() => import('./pages/SignUp'));
const SignIn = React.lazy(() => import('./pages/SignIn'));
const Restore = React.lazy(() => import('./pages/Restore'));
const NotFound = React.lazy(() => import('./pages/NotFound'));


function App() {
    return (
        <Suspense fallback={
            <div className="centered">
                <LoadingSpinner/>
            </div>}>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/sign-up"/>
                </Route>
                <Route path="/sign-up">
                    <SignUp/>
                </Route>
                <Route path="/sign-in">
                    <SignIn/>
                </Route>
                <Route path="/restore">
                    <Restore/>
                </Route>
                <Route path="/doctor-patients">
                    <DoctorPagePatients/>
                </Route>
                <Route path="/user-appointments">
                    <UserAppointmentsPage/>
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </Suspense>
    );
}

export default App;
