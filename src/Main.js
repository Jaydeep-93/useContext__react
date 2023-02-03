import React from 'react';
import { ChangeTheme } from './ChangeTheme';

export const Main = (props) => {
  return (
    <>
      <h6>Main Componenet</h6>
      <div>
        this component does not receive any props and do not pass on any props
        but its parent has one state{' '}
        <b>
          <em>theme</em>
        </b>{' '}
        which is pass via context can be accessed to child of this componenet.
      </div>
      <div>-----------------------------------------</div>
      <ChangeTheme />
    </>
  );
};
