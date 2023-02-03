import React, { useState } from 'react';
import './style.css';
import { ThemeContext } from './ThemeContext';
import { Main } from './Main';

export default function App() {
  const [theme, setTheme] = useState('light');

  return (
    <>
      <ThemeContext.Provider
        value={{ currTheme: theme, setCurrTheme: setTheme }}
      >
        <h5>App Componenet</h5>
        <div>
          Theme Value: <b>{theme}</b>
        </div>
        <div>---------------------------------------</div>
        <Main />
      </ThemeContext.Provider>
    </>
  );
}
