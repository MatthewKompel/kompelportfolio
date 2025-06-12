import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import AppContext from '../AppContext';

function ThemeToggler() {
  return (
    <>
      <AppContext.Consumer>
        {(values) => (
          <div style={{ marginBottom: 8 }}>
            <DarkModeToggle
              onChange={values.darkMode.toggle}
              checked={values.darkMode.value}
              size={50}
            />
          </div>
        )}
      </AppContext.Consumer>
    </>
  );
}

export default ThemeToggler;
