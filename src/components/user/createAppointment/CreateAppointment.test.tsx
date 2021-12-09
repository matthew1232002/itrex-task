import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import React from 'react';
import CreateAppointment from './CreateAppointment';
import * as useActions from '../../../hooks/useActions';
import '@testing-library/jest-dom/extend-expect';

type Default = string;

jest.mock('../../../store/user/patientOperations', () => ({}));

describe('Appointment form', () => {
  test('to be truthy', () => {
    jest.spyOn(React, 'useEffect').mockImplementation(() => {});
    jest.spyOn<any, Default>(useActions, 'default').mockImplementation(() => ({}));
    render(<CreateAppointment />);
    const selects = screen.getAllByRole('combobox');
    expect(selects[0]).toBeTruthy();
    expect(selects[1]).toBeTruthy();
  });
  test('should accept text', async () => {
    jest.spyOn(React, 'useEffect').mockImplementation(() => {});
    jest.spyOn<any, Default>(useActions, 'default').mockImplementation(() => ({}));
    render(<CreateAppointment />);
    const selects = screen.getAllByRole('combobox');
    fireEvent.change(selects[0], { target: { textContent: 'therapist' } });
    fireEvent.change(selects[1], { target: { textContent: 'Jone Doe' } });
    await waitFor(() => expect(selects[0].textContent)
      .toMatch('therapist'));
    await waitFor(() => expect(selects[1].textContent)
      .toMatch('Jone Doe'));
  });
  test('button should be disabled', () => {
    jest.spyOn(React, 'useEffect').mockImplementation(() => {});
    jest.spyOn<any, Default>(useActions, 'default').mockImplementation(() => ({}));
    render(<CreateAppointment />);
    expect(screen.getByTestId(/submit/i)).toBeDisabled();
  });
});
