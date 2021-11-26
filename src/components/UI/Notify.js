import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Notify.css';

export const NotifySuccess = () => (
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
  />
);
