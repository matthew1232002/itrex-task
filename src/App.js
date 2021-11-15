import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LoadingSpinner from './components/UI/LoadingSpinner';

const SignUp = React.lazy(() => import('./pages/SignUp'));
const SignIn = React.lazy(() => import('./pages/SignIn'));
const Restore = React.lazy(() => import('./pages/Restore'));
const DoctorPatients = React.lazy(() => import('./pages/DoctorPagePatients'));
const UserAppointments = React.lazy(() => import('./pages/UserAppointmentsPage'));
const UserCreateAppointment = React.lazy(() => import('./pages/UserCreateAppointment'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Suspense fallback={(
      <div className="centered">
        <LoadingSpinner />
      </div>
          )}
    >
      <Switch>
        <Route path="/" exact>
          <Redirect to="/sign-up" />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/restore">
          <Restore />
        </Route>
        <Route path="/doctor-patients">
          <DoctorPatients />
        </Route>
        <Route path="/user-appointments">
          <UserAppointments />
        </Route>
        <Route path="/create-appointment">
          <UserCreateAppointment />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
