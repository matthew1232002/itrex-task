import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Notify.css';
import React from 'react';
import SuccessIcon from '../../assets/notification_success.svg';
import ErrorIcon from '../../assets/error-notify.svg';

export const Toast = () => (
  <ToastContainer
    position="bottom-left"
    autoClose={3000}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
  />
);

export const NotifySuccess = (message: string) => (
  toast.success(message, {
    icon: () => <img src={SuccessIcon} alt="icon" />,
  })
);

export const NotifyError = (message: string) => (
  toast.error(message, {
    icon: () => <img src={ErrorIcon} alt="icon" />,
  })
);
