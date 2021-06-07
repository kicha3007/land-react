import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useField } from 'formik';
import s from './checkbox-field.module.scss';

const CheckboxField = ({ label, ...props }) => {
  CheckboxField.propTypes = {
    checked: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
  };

  const [field, meta, helper] = useField(props);
  const { setValue } = helper;

  const onChangeHandler = (evt) => {
    console.log('evt', evt);
    setValue(evt.target.checked);
  };

  return (
    <div className={s.checkbox}>
      <label className={s.label} htmlFor={field.name}>
        <input
          className={s.input}
          type="checkbox"
          hidden
          checked={field.value}
          name={field.name}
          id={field.name}
          onChange={onChangeHandler}
        />
        <div className={s.wrap}>
          <div className={s.text}>
            { label }
          </div>
        </div>
      </label>
    </div>
  );
};

export { CheckboxField };