import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import * as useActions from '../../hooks/useActions';

import SignInForm from './SignInForm';

jest.mock('../../store/user/patientOperations', () => ({}));

describe('Sign In form', () => {
  test('rendering and submitting a Sign In form', async () => {
    const loginUser = jest.fn(() => {});
    jest.spyOn<any, string>(useActions, 'default').mockImplementation(() => ({
      loginUser,
    }));
    render(
      <BrowserRouter>
        <SignInForm />
      </BrowserRouter>,
    );
    userEvent.type(screen.getByTestId(/username/i), 'test@gmail.com');
    userEvent.type(screen.getByTestId(/password/i), '123456');

    userEvent.click(screen.getByRole('button'));

    await waitFor(() => expect(loginUser).toHaveBeenCalledWith({
      userName: 'test@gmail.com',
      password: '123456',
    }));
  });
});