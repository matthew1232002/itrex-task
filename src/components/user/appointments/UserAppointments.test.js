import React from 'react';
import { render, waitFor} from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { BrowserRouter } from 'react-router-dom';
import * as useActions from '../../../hooks/useActions';
import UserAppointments from './UserAppointments';

const appointments = [
  {
    id: 'id',
    reason: 'string',
    note: 'string',
    patient_id: 'string',
    doctor_id: 'string',
    visit_date: 'string',
    status: 'string',
    doctor: {
      last_name: 'string',
      first_name: 'string',
      id: 'string',
      photo: 'string',
      specialization_name: 'string',
    },
  },
];

jest.mock('../../../store/user/patientOperations', () => ({
  getAppointments: () => new Promise((resolve) => resolve({
    data: {
      appointments,
    },
  })),
  changeIsAddedState: () => {},
}));

describe('User Appointments', () => {
  const mock = new MockAdapter(axios);
  test('Appointments list should render appointments', async () => {
    jest.spyOn(useActions, 'default').mockImplementation(() => ({
      isAdded: false,
      isAddedChangeState: () => {},
    }));
    mock.onGet('/api/appointments/patient/me', { params: { offset: 0, limit: 20, token: '...' } }).reply(200, {
      appointments: [{
        id: 'id',
        reason: 'string',
        note: 'string',
        patient_id: 'string',
        doctor_id: 'string',
        visit_date: 'string',
        status: 'string',
        doctor: {
          last_name: 'string',
          first_name: 'string',
          id: 'string',
          photo: 'string',
          specialization_name: 'string',
        },
      }],
    });
    const {getAllByTestId} = render(
      <BrowserRouter>
        <UserAppointments />
      </BrowserRouter>,
    );
    await waitFor(() => {
      expect(getAllByTestId('id')).toHaveLength(appointments.length);
    });
  });
});
