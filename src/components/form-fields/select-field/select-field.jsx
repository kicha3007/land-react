import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Select, { components } from 'react-select';
import s from './select-field.module.scss';

const SelectField = ({ label, dataList, ...props }) => {
  SelectField.propTypes = {
    label: PropTypes.string,
    dataList: Array,
  };
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;
  const { touched, error } = meta;
  const isError = touched && error && true;

  const renderHelperText = () => {
    if (touched && error) {
      return error;
    }
    return null;
  };

  const styles = {
    [s['select-field']]: true,
    error: isError,
  };

  const { Option, ValueContainer } = components;

  const IconOption = (propsOption) => {
    const { data: { label: labelOption, icon } } = propsOption;
    return (
      <Option {...propsOption}>
        {!!icon && (
          <img
            src={`/static/images/${icon}`}
            style={{ width: 36 }}
            alt={labelOption}
          />
        )}
        { labelOption }
      </Option>
    );
  };

  const inputContainer = ({ children, ...props }) => {
    const { propsContainer } =

    console.log("children",children );
    return (
      components.ValueContainer && (
        <ValueContainer {...propsContainer}>
          {!!children && (
            <i
              className="fa fa-search"
              aria-hidden="true"
              style={{ position: 'absolute', left: 6 }}
            />
          )}
          {children}
        </ValueContainer>
      )
    );
  };

  return (
    <div className={cn(styles)}>
      <Select
        className={s.select}
        components={{ Option: IconOption, ValueContainer: inputContainer }}
        options={dataList}
        defaultValue={dataList[0]}
      />
    </div>

  );
};

export { SelectField };