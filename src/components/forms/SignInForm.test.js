import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as useActions from "../../hooks/useActions";

import SignInForm from "./SignInForm";
import {BrowserRouter} from "react-router-dom";

jest.mock('../../store/user/patientOperations', () => ({}));

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        pathname: "/sign-in"
    })
}));

describe('Sign In form', () => {
    test('rendering and submitting a Sign In form', async () => {
        const loginUser = jest.fn((values) =>  {})
        jest.spyOn(useActions, 'default').mockImplementation(() => ({
            loginUser,
        }))
        render(
            <BrowserRouter>
                <SignInForm />
            </BrowserRouter>
        );
        userEvent.type(screen.getByTestId(/username/i), 'test@gmail.com');
        userEvent.type(screen.getByTestId(/password/i), '123456');

        userEvent.click(screen.getByRole('button'))

        await waitFor(() =>
            expect(loginUser).toHaveBeenCalledWith({
                userName: 'test@gmail.com',
                password: '123456',
            }),
        )
    });
});