import React from 'react';
import { AppProvider } from './context/AppState';
import { ThemeProvider } from './context/ThemeState';
import Routes from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <AppProvider>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AppProvider>
  );
}

export default App;
