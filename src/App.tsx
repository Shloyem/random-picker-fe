// Run by command: npm start
import React, { useState } from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <header className="App-header">
          <AppRoutes />
        </header>
      </div>
    </React.StrictMode>
  );
}

export default App;
