/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/main.scss';

function TextInput({
  inputProps, onChange, value, label,
}) {
  return (
    <div className="textInput">
      <label className="textInput__label">{label}</label>
      <input onChange={onChange} value={value} {...inputProps} className="textInput__input" />
    </div>
  );
}

TextInput.propTypes = {};

export default TextInput;
