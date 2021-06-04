import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './checkbox-field.module.scss';

const CheckboxField = ({ checked = null, text, name }) => {
  CheckboxField.propTypes = {
    checked: PropTypes.bool,
    text: PropTypes.string,
    name: PropTypes.string,
  };
  return (
    <div className={s.checkbox}>
      <label className={s.label} htmlFor={name}>
        <input className={s.input} type="text" hidden checked={checked} name={name} />
        <div className={s.wrap}>
          <div className={s.text}>
            { text }
          </div>
        </div>
      </label>
    </div>
  );
};

export { CheckboxField };