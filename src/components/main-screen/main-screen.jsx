import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './main-screen.scss';
import { Button } from '../ui/button';

const MainScreen = ({ title, text, buttonText }) => (
  <div className={s.mainScreen}>
    <div className={cn('main-container')}>
      <div className="title">{ title }</div>
      <div className="text">{ text }</div>
      <Button
        text={buttonText}
      />
    </div>
  </div>
);

MainScreen.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
};

export { MainScreen };
