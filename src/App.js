import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import routes from './routes/routes';
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
    <Suspense fallback={<LoadingSpinner />}>
      <Switch>
        <Route path="/" exact>
          <Redirect to={routes.signUpPage} />
        </Route>
        <Route path={routes.signUpPage}>
          <SignUp />
        </Route>
        <Route path={routes.signInPage}>
          <SignIn />
        </Route>
        <Route path={routes.restorePage}>
          <Restore />
        </Route>
        <Route path={routes.doctorPatientsPage}>
          <DoctorPatients />
        </Route>
        <Route path={routes.userAppointmentsPage}>
          <UserAppointments />
        </Route>
        <Route path={routes.createAppointmentPage}>
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
