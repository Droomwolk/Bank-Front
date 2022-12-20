/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { userLogin } from '../../redux/action';
import { addEmail, addPassword, setSubmit } from '../../redux/loginSlice';
import TextInput from '../../components/textInput/textInput';

import '../../scss/main.scss';

function SignIn() {
  const { isFetching, errorMsg, serverMsg } = useSelector((state) => state.user);
  const { email, password } = useSelector(((state) => state.user));
  const currentState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = sessionStorage.getItem('user');
    if (userToken !== null) {
      navigate('/Profil', { replace: true });
    }
  });

  const handleEmailInputChange = (e) => {
    e.persist();
    dispatch(addEmail(e.target.value));
  };

  const handlePasswordInputChange = (e) => {
    e.persist();
    dispatch(addPassword(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentState.email && currentState.password) {
      dispatch(userLogin({ email, password }));
      dispatch(setSubmit(true));
    }
    else if (currentState.email === '' && currentState.password === '') {
      alert("l'adresse Email ou le mot de passe n'est pas valid ou est manquant");
    }
  };

  return (
    <main className="main">
      {/* <Form /> */}
      <section className="loginContent">
        {/* <p className={error ? "error" : "offscreen"}>{error}</p> */}
        <FontAwesomeIcon icon="fa-solid fa-circle-user" className="loginContent__signInIcon" />
        <h1 className="loginContent__title">Sign In</h1>
        <form className="loginContent__form" onSubmit={handleSubmit}>
          {errorMsg
            ? <p className="error-msg">{serverMsg}</p>
            : null}
          <div className="loginContent__form-inputWrapper">
            <TextInput
              // value={emailLogin}
              type="text"
              name="emailLogin"
              placeholder="Email"
              onChange={handleEmailInputChange}
            />
          </div>
          <div className="loginContent__form-inputWrapper">
            <TextInput
              // value={passwordLogin}
              type="password"
              name="passwordLogin"
              placeholder="Mot de passe"
              onChange={handlePasswordInputChange}
            />
          </div>
          <div className="loginContent__form-rememberWrapper">
            <input type="checkbox" id="remember" />
            <label>Remember me</label>
          </div>
          <button type="submit" className="loginContent__form-signInBtn">
            Sign In
            {isFetching ? <p>Loading ... </p> : null }
          </button>
        </form>
        <div className="loginContent__signUp">
          <p className="loginContent__signUp-question">Need an account?</p>
          <Link to="/signup">
            <p className="loginContent__signUp-message">Sign Up</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

SignIn.propTypes = {};

export default SignIn;
