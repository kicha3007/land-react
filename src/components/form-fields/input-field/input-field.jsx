import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import s from './input-field.module.scss';

const InputField = ({ label, ...props }) => {
  InputField.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
  };

  const [field, meta, helper] = useField(props);
  const { setValue } = helper;

  const onChangeHandler = (evt) => {
    console.log('evt', evt);
    setValue(evt.target.value);
  };

  return (
    <div className={s['input-field']}>
      <div className={s.placeholder}>
        { label }
      </div>
      <input
        className={s.input}
        value={field.value}
        name={field.name}
        onChange={onChangeHandler}
      />

    </div>
  );
};

export { InputField };