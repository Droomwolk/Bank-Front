/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/main.scss';
import TextInput from '../../components/textInput/textInput';
import Compte from '../../components/compte/compte';
import Button from '../../components/button/button';

function Profil() {
  return (
    <main className="profil">
      <section className="profil__section">
        <h1 className="profil__section-title">Welcome back</h1>
        <div className="profil__section-input">
          <div className="profil__section-input-one">
            <TextInput />
            <Button className="profil__section-input-one-button" color="#6458F6" name="Save" back="white" padding="0.4rem 2.4rem" border="0.1rem solid #B4B3F1" />
          </div>
          <div className="profil__section-input-two">
            <TextInput />
            <Button className="profil__section-input-two-button" color="#6458F6" name="Cancel" back="white" padding="0.4rem 2.4rem" border="0.1rem solid #B4B3F1" />
          </div>
        </div>
      </section>
      <div className="profil__compte">
        <Compte title="Argent bank checking" cash="2,000.98" balance="Available Balance" />
      </div>
    </main>
  );
}

Profil.propTypes = {};

export default Profil;
