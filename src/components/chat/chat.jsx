import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './chat.module.scss';

const Chat = ({ image, text, indentRight }) => (
  <div className={cn(s.chat, { [s['indent-right']]: indentRight })}>
    <img className={s.image} src={image} alt="" />
    <div className={s.text}>{text}</div>
  </div>
);

Chat.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  indentRight: PropTypes.string,
};

export { Chat };
