import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './phone.module.scss';

const Phone = ({ phone, text }) => {
  const clearPhoneNumber = phone.replace(/[^\d]/g, '');
  return (
    <div className={cn(s.phone)}>
      <div className={s.wrap}>
        <a href={`tel:${clearPhoneNumber}`} className={s.number}>
          { phone }
        </a>
        <div className={s.text}>
          { text }
        </div>
      </div>
    </div>
  );
};

Phone.propTypes = {
  phone: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export { Phone };
