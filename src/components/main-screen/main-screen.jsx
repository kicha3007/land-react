import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './main-screen.module.scss';
import { Button } from '../ui/button';

const MainScreen = ({
  title, text, buttonText,
}) => {
  MainScreen.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    buttonText: PropTypes.string,
  };

  return (
    <div className={cn(s['main-screen'])}>
      <div className={cn('main-container')}>
        <div className={s.wrap}>
          <div className={s.title}>{title}</div>
          <div className={s.text}>{text}</div>
          <Button
            text={buttonText}
          />
        </div>
      </div>
    </div>
  );
};

export { MainScreen };
