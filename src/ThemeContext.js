import React, { createContext } from 'react';

export const ThemeContext = createContext({
  currTheme: 'light',
  setCurrTheme: (name) => {
    return name;
  },
});
