import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import * as useActions from '../../hooks/useActions';
import SignUpForm from './SignUpForm';

jest.mock('../../store/user/patientOperations', () => ({}));

type Default = string;

describe('Sign In form', () => {
  test('rendering and submitting a Sign In form', async () => {
    const registerUser = jest.fn(() => {});
    jest.spyOn<any, Default>(useActions, 'default').mockImplementation(() => ({
      registerUser,
    }));
    render(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>,
    );

    userEvent.type(screen.getByTestId(/firstName/i), 'Dmitrii');
    userEvent.type(screen.getByTestId(/lastName/i), 'Goncharenko');
    userEvent.type(screen.getByTestId(/userNameSignUp/i), 'dmitrii@gmail.com');
    userEvent.type(screen.getByTestId(/passwordSignUp/i), '12345678');
    userEvent.type(screen.getByTestId(/confirmPassword/i), '12345678');

    userEvent.click(screen.getByRole('button'));

    await waitFor(() => expect(registerUser).toHaveBeenCalledWith({
      firstName: 'Dmitrii',
      lastName: 'Goncharenko',
      userName: 'dmitrii@gmail.com',
      password: '12345678',
    }));
  });
});
