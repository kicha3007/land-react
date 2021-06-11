import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Select, { components } from 'react-select';
import s from './select-field.module.scss';

const SelectField = ({ label, dataList, ...props }) => {
  SelectField.propTypes = {
    label: PropTypes.string,
    dataList: PropTypes.arrayOf(PropTypes.object),
  };

  const [field, meta, helper] = useField(props);
  const {touched, error} = meta;
  const {setValue} = helper;

  console.log("field", field);

  const isError = touched && error && true;

  const renderHelperText = () => {

    console.log("touched", touched);
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

  const {Option, ValueContainer, DropdownIndicator} = components;

  const optionTemplate = (propsOption) => {
    const {
      data: {label: labelOption, icon, value},
      isSelected, ...propsOptionRest
    } = propsOption;

    return (
      !!Option && (
        <Option
          className={cn({[s.selected]: isSelected && value})}
          {...propsOptionRest}
        >
          {!!icon && (
            <img
              className={s['default-option-icon']}
              src={`/static/images/${icon}`}
              alt={labelOption}
            />
          )}
          {labelOption}
        </Option>
      )
    );
  };

  const defaultOptionTemplate = (propsDefaultOption) => {
    const {children, ...propsOptionRest} = propsDefaultOption;
    const {label: labelOption, value, icon} = children[0].props.data;
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
          {children}
        </ValueContainer>
      )
    );
  };

  const dropdownIndicatorTemplate = (propsDropdownIndicator) => {
    console.log("propsDropdownIndicatorpropsDropdownIndicator", propsDropdownIndicator);
  return (
    <DropdownIndicator {...propsDropdownIndicator}>
      <img src="/static/images/arrow-dropdown.svg" alt=""/>
    </DropdownIndicator>
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
      padding: '4px 0',
      position: 'absolute',
      top: 'calc(100% + 6px)',
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
      position: 'relative',
    }),
    control: () => ({
      borderColor: 'transparent',
      display: 'flex',
      cursor: 'pointer',
      background: '#fff',
      borderRadius: '8px',
      overflow: 'hidden',
    }),
    IndicatorsContainer: () => ({
      display: 'flex',
      flexShrink: 0,
      border: 'none',
      alignItems: 'center',
    }),
  };

  return (
    <div className={cn(styles.selectField)}>
      <Select
        className={s.select}
        //name={field.name}
        components={{
          Option: optionTemplate,
          ValueContainer: defaultOptionTemplate,
          DropdownIndicator: dropdownIndicatorTemplate,
        }}
        options={dataList}
        defaultValue={dataList[0]}
        styles={customStyles}
        onChange={(option) => setValue(option.value)}
      />
      <div className={s['error-text']}>
        { renderHelperText() }
      </div>
    </div>

  );
};

export { SelectField };