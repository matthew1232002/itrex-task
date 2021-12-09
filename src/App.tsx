import React, { Suspense, useEffect } from 'react';
import {
  Route, Switch, useHistory, Redirect,
} from 'react-router-dom';

import routes from './routes/routes';
import LoadingSpinner from './components/UI/LoadingSpinner';
import useActions from './hooks/useActions';

const SignUp = React.lazy(() => import('./pages/SignUp'));
const SignIn = React.lazy(() => import('./pages/SignIn'));
const Restore = React.lazy(() => import('./pages/Restore'));
const DoctorPatients = React.lazy(() => import('./pages/DoctorPagePatients'));
const UserAppointments = React.lazy(() => import('./pages/UserAppointmentsPage'));
const UserCreateAppointment = React.lazy(() => import('./pages/UserCreateAppointment'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  const { profile = null } = useActions();
  const history = useHistory();

  useEffect(() => {
    if (profile) {
      if (profile.role_name === 'Doctor') {
        history.replace(routes.doctorPatientsPage);
      } else if (profile.role_name === 'Patient') {
        history.replace(routes.userAppointmentsPage);
      }
    }
  }, [profile]);
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Switch>
        <Route path="/" exact>
          <Redirect to={routes.signUpPage} />
        </Route>
        <Route path={routes.signUpPage} component={SignUp} />
        <Route path={routes.signInPage} component={SignIn} />
        <Route path={routes.restorePage} component={Restore} />
        <Route path={routes.doctorPatientsPage} component={DoctorPatients} />
        <Route path={routes.userAppointmentsPage} component={UserAppointments} />
        <Route path={routes.createAppointmentPage} component={UserCreateAppointment} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default App;
