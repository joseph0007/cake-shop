import React from 'react';

import './header.scss';
import logo from '../../images/cake-icon.jpg';

export default function Header() {
  return (
    <div className='header header__image'>
      <div className="header__icon">
        <img src={logo} alt="cake-icon" className='header__icon--img'/>
      </div>

      <div className="header__title--1">
        <div className="header__title">
          The
        </div>

        <div className="header__title">
          Cake Shop
        </div>
      </div>
    </div>
  )
}