import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Logo from '../../assets/img/argentBankLogo.png';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="header-logo" className="header__logo" />
      </Link>
      <Link to="/signIn">
        <div className="header__authen">
          <FontAwesomeIcon icon="fa-solid fa-circle-user" className="header__authen-icon" />
          <p className="header__authen-connect">Sign In</p>
        </div>
      </Link>
    </div>
  );
}

Header.propTypes = {};

export default Header;
