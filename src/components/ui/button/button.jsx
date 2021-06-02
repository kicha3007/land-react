import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './button.module.scss';

const Button = ({ text, linkHref = null, buttonType = 'button' }) => {
  const renderButton = () => (
    <button type={buttonType} className={s.button}>{ text }</button>
  );

  const renderLink = () => (
    <a href={linkHref} className={s.button}>{ text }</a>
  );

  return (
    linkHref ? renderLink() : renderButton()
  );
};

Button.propTypes = {
  text: PropTypes.string,
  linkHref: PropTypes.string,
  buttonType: PropTypes.string,
};

export { Button };
