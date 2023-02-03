import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const ChangeTheme = (props) => {
  const { currTheme, setCurrTheme } = useContext(ThemeContext);

  return (
    <>
      <h6>ChangeTheme Compoenent</h6>
      <div>Current Theme value: {currTheme}</div>
      <button
        className="btn btn-outline-dark btn-sm m-3"
        onClick={(e) => {
          setCurrTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
        }}
      >
        Toggle Theme
      </button>
    </>
  );
};
