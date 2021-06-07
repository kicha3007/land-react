import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { CheckboxField } from '../../form-fields/checkbox-field';
import { InputField } from '../../form-fields/input-field';

const cashBackList = [
  {
    value: undefined,
    label: 'Выберите опцию кэшбэка',
    icon: '',
  },
  {
    value: '0',
    label: 'Кэшбек на всё',
    icon: '',
  },
  {
    value: '1',
    label: 'Умный кэшбек',
    icon: '',
  },
  {
    value: '2',
    label: 'Авто',
    icon: '',
  },
  {
    value: '3',
    label: 'Баллы партнёра',
    icon: '',
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
  } = props;

  return (
    <div>
      <>
        <CheckboxField label={fullNameDontChanged.label} name={fullNameDontChanged.name} />
        <InputField label={fullName.label} name={fullName.name} />
      </>
    </div>
  );
};

export { InfoStep };