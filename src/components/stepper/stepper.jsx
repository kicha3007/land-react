import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import s from './stepper.module.scss';

const Stepper = ({ stepsCount, activeStep }) => {
  Stepper.propTypes = {
    stepsCount: PropTypes.number.isRequired,
    activeStep: PropTypes.number.isRequired,
  };

  const dotsBlankList = new Array(stepsCount).fill('');

  const dots = dotsBlankList.map((item, index) => {
    const isActiveDot = index === activeStep ? s.active : null;

    return (
      <div className={cn(s.dot, isActiveDot)} />
    );
  });

  const dotsList = dots.length > 0 ? dots : null;

  return (
    <div className={s.stepper}>
      <div className={s['dots-wrap']}>
        {dotsList}
      </div>
    </div>
  );
};

export { Stepper };
