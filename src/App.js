import React from 'react';
import { ThemeProvider } from './context/ThemeState';
import { Header } from './Components/layout/Header';
import { ChatContainer } from './Components/layout/ChatContainer';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <div style={{ height: 'calc(100% - 60px)', overflow: 'auto' }}>
        <Profile />
        {/* <Game /> */}
      </div>
      <ChatContainer />
    </ThemeProvider>
  );
}

export default App;
