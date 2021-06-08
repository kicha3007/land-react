import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import cn from 'classnames';
import s from './input-field.module.scss';

const InputField = ({ label, ...props }) => {
  InputField.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
  };

  const [field, meta, helper] = useField(props);
  const { touched, error } = meta;
  const { setValue } = helper;
  const isError = touched && error && true;

  const onChangeHandler = (evt) => {
    setValue(evt.target.value);
  };

  const renderHelperText = () => {
    if (touched && error) {
      return error;
    }
    return null;
  };

  const styles = {
    [s['input-field']]: true,
    error: isError,
  };

  return (
    <div className={cn(styles)}>
      <div className={s.placeholder}>
        { label }
      </div>
      <input
        className={s.input}
        value={field.value}
        name={field.name}
        onChange={onChangeHandler}
        onBlur={field.onBlur}
      />
      <div className={s['error-text']}>
        { renderHelperText() }
      </div>

    </div>
  );
};

export { InputField };