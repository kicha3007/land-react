import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import cn from 'classnames';
import s from './input-field.module.scss';

const InputField = ({ label, ...props }) => {
  InputField.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
  };

  const [hasValue, setHasValue] = useState(false);

  const [field, meta, helper] = useField(props);
  const { touched, error, value: currentValue  } = meta;
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

  const onBlurHandle = (evt) => {
    field.onBlur(evt);
    if (field.value !== '') {
      setHasValue(true);
    } else {
      setHasValue(false);
    }
  };

  const styles = {
    inputField: {
      [s['input-field']]: !!s['input-field'],
      error: isError,
      [s['has-value']]: hasValue,
    },
  };

  return (
    <div className={cn(styles.inputField)}>
      <input
        className={s.input}
        value={field.value}
        name={field.name}
        onChange={onChangeHandler}
        onBlur={onBlurHandle}
      />
      <div className={s.placeholder}>
        { label }
      </div>
      <div className={s['error-text']}>
        { renderHelperText() }
      </div>
    </div>
  );
};

export { InputField };