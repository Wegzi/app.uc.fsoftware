import React from 'react';
import { ThemeProvider } from './context/ThemeState';
import Routes from './Routes';

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
