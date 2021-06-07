import React from 'react';
import PropTypes from 'prop-types';
import s from './input-field.module.scss';

const InputField = ({ name, text }) => {
  InputField.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
  };

  return (
    <div className={s['input-field']}>
      <div className={s.placeholder}>
        { text }
      </div>
      <input type={s.input} name={name} />

    </div>
  );
};

export { InputField };