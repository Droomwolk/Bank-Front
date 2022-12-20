/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/main.scss'
import Button from '../button/button';

function Compte({title, cash, balance}) {
  return (
    <div className="compte">
      <div className="compte__argent">
        <p> {title} </p>
        <h3 className="compte__argent-price"> ${cash} </h3>
        <p> {balance} </p>
      </div>
      <div className="compte__button">
        <Button className="compte__button-view" name="View transactions" border="none" />
      </div>
    </div>
  );
}

Compte.propTypes = {};

export default Compte;
