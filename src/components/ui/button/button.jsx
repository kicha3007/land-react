import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './button.module.scss';

const Button = ({ text, linkHref = null, type = 'button' }) => {
  Button.propTypes = {
    text: PropTypes.string,
    linkHref: PropTypes.string,
    type: PropTypes.string,
  };

  const renderButton = () => (
    <button type={type} className={s.button}>{ text }</button>
  );

  const renderLink = () => (
    <a href={linkHref} className={s.button}>{ text }</a>
  );

  return (
    linkHref ? renderLink() : renderButton()
  );
};

export { Button };
