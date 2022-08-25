import React from 'react';
import NavState from '../context/navState';
import MainMenu from './MainMenu';

function BurgerMenu() {
  return (
    <div>
            <NavState>
      <MainMenu />
    </NavState>
    </div>
  )
}

export default BurgerMenu;