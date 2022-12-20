/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextInput from '../textInput/textInput';
import '../../scss/main.scss';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // reload page
    // try {
    //   const response = await axios.post(
    //     LOGIN_URL,
    //     JSON.stringify({ email, password }),
    //     {
    //       headers: {
    //         "Content-type": "application/json",
    //       },
    //       withCredentials: false, // if it's true?
    //     }
    //   );
    //   console.log(JSON.stringify(response));
    //   console.log(JSON.stringify(response?.data?.body.token));

    //   const accessToken = response?.data?.body.token;

    //   setAuth({ email, password, accessToken });
    //   setEmail("");
    //   setPassword("");
    //   setSuccess(true);

    //   navigate("/profile");

    //   dispatch(
    //     logIn({
    //       email: email,
    //       accessToken: accessToken,
    //     })
    //   );
    // } catch (error) {
    //   if (!error.response) {
    //     setErrMsg("No Server Response"); // not tested yet.
    //   } else if (error.response?.status === 400) {
    //     setErrMsg("Wrong Email or Password"); // tested: ok
    //   } else {
    //     setErrMsg("Login Failed"); // tested : ok
    //   }
    // }
  };

  return (
    <section className="loginContent">
      {/* <p className={error ? "error" : "offscreen"}>{error}</p> */}
      <FontAwesomeIcon icon="fa-solid fa-circle-user" className="loginContent__signInIcon" />
      <h1 className="loginContent__title">Sign In</h1>
      <form className="loginContent__form" onSubmit={handleSubmit}>
        <div className="loginContent__form-inputWrapper">
          <TextInput
            label="Email"
            inputProps={{
              type: 'text',
              id: 'email',
              autoComplete: 'off',
            }}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="loginContent__form-inputWrapper">
          <TextInput
            label="Password"
            inputProps={{
              type: 'password',
              id: 'password',
              autoComplete: 'off',
            }}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="loginContent__form-rememberWrapper">
          <input type="checkbox" id="remember" />
          <label>Remember me</label>
        </div>
        <button type="submit" className="loginContent__form-signInBtn">
          Sign In
        </button>
      </form>
      <div className="loginContent__signUp">
        <p className="loginContent__signUp-question">Need an account?</p>
        <Link to="/signup">
          <p className="loginContent__signUp-message">Sign Up</p>
        </Link>
      </div>
    </section>
  );
}

Form.propTypes = {};

export default Form;
