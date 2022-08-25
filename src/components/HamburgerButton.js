import React, { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext } from '../context/navState';

//Это кнопка

const MenuButton = styled.button`
{/* фон кнопки */}

  display: none; //скрыл кнопку до сужения до нужных параметров 

  @media (max-width: 2000px) {
  display: block;
  transform-origin: 16px 11px; 
  float: left;
  margin-right: 29px;  {/* отступ от кнопки */}
  outline: 0;
  border: 0;
  padding: 12px;
  background: none;
  
  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  :focus {
    border: medium none rgb(111, 255, 176);
    box-shadow: rgb(111, 255, 176) 0 0 2px 2px;
    outline: 0;
  }

  :hover {
    {/* эффект наведения на кнопку */}
    
    span:nth-of-type(1) {
      width: 33px;
    }

    span:nth-of-type(2) {
      width: 40px;
    }

    span:nth-of-type(3) {
      width: 30px;
    }
  }

  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(10px, 10px);
      width: 40px;
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(7px, -7px);
      width: 40px;
    }
  }
}
`;

const Bar = styled.span`
{/* цвет спанов в меню */}

  @media (max-width: 2000px) {

  display: block;
  width: 40px;
  height: 5px;
  margin-bottom: 7px;
  //background-color: #fff;
  background-color: black;
  }
`;


const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <MenuButton
      className={isMenuOpen ? 'active' : ''}
      aria-label="Открыть главное меню"
      onClick={clickHandler}
    >
      <Bar />
      <Bar />
      <Bar />
    </MenuButton>
  );
};

export default HamburgerButton;