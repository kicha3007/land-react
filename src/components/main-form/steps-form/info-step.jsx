import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { CheckboxField } from '../../form-fields/checkbox-field';
import { InputField } from '../../form-fields/input-field';
import { SelectField } from '../../form-fields/select-field';

const cashBackList = [
  {
    value: null,
    label: 'Выберите опцию кэшбэка',
  },
  {
    value: '0',
    label: 'Кэшбек на всё',
    icon: 'bag.svg',
  },
  {
    value: '1',
    label: 'Умный кэшбек',
    icon: 'coffee.svg',
  },
  {
    value: '2',
    label: 'Авто',
    icon: 'car.svg',
  },
  {
    value: '3',
    label: 'Баллы партнёра',
    icon: 'magazine.svg',
  },
];

const InfoStep = (props) => {
  InfoStep.propTypes = {
    formFields: PropTypes.objectOf(PropTypes.object),
    cashBack: PropTypes.objectOf(PropTypes.string),
    fullName: PropTypes.objectOf(PropTypes.string),
    fullNameDontChanged: PropTypes.objectOf(PropTypes.string),
    phone: PropTypes.objectOf(PropTypes.string),
    smsCode: PropTypes.objectOf(PropTypes.string),
    email: PropTypes.objectOf(PropTypes.string),
    formClasses: PropTypes.objectOf(PropTypes.string),
  };

  const {
    formFields: {
      cashBack,
      fullName,
      fullNameDontChanged,
      phone,
      smsCode,
      email,
    },
    formClasses,
  } = props;
  console.log("formClasses", formClasses);
  console.log("fullName", fullName);

  return (
    <>
      <div className={formClasses.row}>
        <div className={cn(formClasses.column)}>
          <SelectField dataList={cashBackList} />
        </div>
      </div>
      <div className={formClasses.row}>
        <div className={cn(formClasses.column, formClasses.column_pos_1)}>
          <InputField label={fullName.label} name={fullName.name} />
        </div>
        <div className={cn(formClasses.column, formClasses.column_pos_2)}>
          <CheckboxField label={fullNameDontChanged.label} name={fullNameDontChanged.name} />
        </div>
      </div>
      <div className={formClasses.row}>
        <div className={cn(formClasses.column, formClasses.column_pos_1)}>
          <InputField label={phone.label} name={phone.name} />
        </div>
        <div className={cn(formClasses.column, formClasses.column_pos_2)}>
          <InputField label={smsCode.label} name={smsCode.name} />
        </div>
      </div>
      <div className={formClasses.row}>
        <div className={cn(formClasses.column, formClasses.column_pos_1)}>
          <InputField label={email.label} name={email.name} />
        </div>
        <div className={cn(formClasses.column, formClasses.column_pos_2)}>
        </div>
      </div>
    </>
  );
};

export { InfoStep };