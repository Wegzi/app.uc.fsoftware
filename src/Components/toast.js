import { toast as toaster } from 'react-toastify';

const error = message =>
  toaster.error(message, {
    position: 'bottom-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const toast = { error };
export default toast;
