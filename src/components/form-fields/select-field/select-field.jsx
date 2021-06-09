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
    selectField: {
      [s['select-field']]: true,
      error: isError,
    },
  };

  const { Option, ValueContainer } = components;

  const optionTemplate = (propsOption) => {
    const { data: { label: labelOption, icon }, ...propsOptionRest } = propsOption;
    return (
      !!Option && (
        <Option {...propsOptionRest}>
            {!!icon && (
              <img
                className={s['default-option-icon']}
                src={`/static/images/${icon}`}
                alt={labelOption}
              />
            )}
            { labelOption }
        </Option>
      )
    );
  };

  const defaultOptionTemplate = (propsDefaultOption) => {
    const { children, ...propsOptionRest } = propsDefaultOption;
    const { label: labelOption, value, icon } = children[0].props.data;
    const isDefaultValue = !value;
    const style = {
      [s['default-value']]: isDefaultValue,
    };

    return (
      !!ValueContainer && (
        <ValueContainer {...propsOptionRest} className={cn(style)}>
          {!!icon && (
            <img
              src={`/static/images/${icon}`}
              className={s['option-icon']}
              alt={labelOption}
            />
          )}
          { children }
        </ValueContainer>
      )
    );
  };

  const customStyles = {
    valueContainer: () => ({
      padding: '18px 16px 16px',
      display: 'flex',
      flexGrow: '1',
    }),
    singleValue: () => ({
      position: 'static',
    }),
    SingleValue: () => ({
      fontSize: '20px',
      lineHeight: '30px',
      letterSpacing: '0.01em',
      color: '#18202A',
    }),
    menu: () => ({
      padding: '0 8px',
      position: 'absolute',
      top: 'calc(100% + 2px)',
      zIndex: '10',
      background: '#fff',
      width: '100%',
      border: '1px solid #CED7E0',
      borderRadius: '8px',
    }),
    option: () => ({
      padding: '12px 15px',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    }),
    control: () => ({
      borderColor: 'transparent',
      display: 'flex',
      cursor: 'pointer',
      background: '#fff',
    }),
  };

  return (
    <div className={cn(styles.selectField)}>
      <Select
        className={s.select}
        components={{ Option: optionTemplate, ValueContainer: defaultOptionTemplate }}
        options={dataList}
        defaultValue={dataList[0]}
        styles={customStyles}
      />
    </div>

  );
};

export { SelectField };