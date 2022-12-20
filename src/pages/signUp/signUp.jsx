/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextInput from '../../components/textInput/textInput';
import '../../scss/main.scss';

function SignUp() {
//   const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSuccess(true);
  };

  return (
    <main className="main">
      <section className="signUp">
        <FontAwesomeIcon icon="fa-solid fa-user-plus" className="signUp__icon" />
        <h2 className="signUp__title">SignUp</h2>
        <form className="signUp__form" onSubmit={handleSubmit}>
          <TextInput label="FirstName" />
          <TextInput label="LastName" />
          <TextInput label="Email" />
          <TextInput label="Password" />
          <button type="submit" className="signUp__form-signUpBtn">
            Sign Up
          </button>
        </form>
        <div className="signUp__signIn">
          <p className="signUp__signIn-question">Already have an account?</p>
          <Link to="/signIn">
            <p className="signUp__signIn-message">Sign In</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

SignUp.propTypes = {};

export default SignUp;
