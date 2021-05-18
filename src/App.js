import React from 'react';
import { AppProvider } from './context/AppState';
import { ThemeProvider } from './context/ThemeState';
import Routes from './Routes';

function App() {
  return (
    <AppProvider>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
