import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import s from './stepper.module.scss';

const Stepper = ({ stepsArr, activeStep }) => {
  Stepper.propTypes = {
    stepsArr: PropTypes.arrayOf(PropTypes.object),
    activeStep: PropTypes.number.isRequired,
  };

  const dots = stepsArr.map((item, index) => {
    const isActiveDot = index === activeStep ? s.active : null;

    return (
      <div className={cn(s.dot, isActiveDot)} key={item.id} />
    );
  });

  const dotsList = dots.length > 0 ? dots : null;

  return (
    <div className={s.stepper}>
      <div className={s.text}>
        {`Шаг ${activeStep + 1} из ${stepsArr.length}`}
      </div>
      <div className={s['dots-wrap']}>
        { dotsList }
      </div>
    </div>
  );
};

export { Stepper };
