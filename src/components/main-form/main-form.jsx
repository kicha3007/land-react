import React, { useState } from 'react';
import cn from 'classnames';
import s from './main-form.module.scss';
import { formik, form } from 'formik';

import {
  DocumentsStep, EmployerStep, HomeStep, InfoStep, SmsStep,
} from './steps-from';

const steps = ["Заполните информацию", "Подтвердите мобильный телефон", "Документы", "Место жительства", "Работодатель"];

const _renderStepContent = (step) => {
  switch(step) {
    case 0:
      return <InfoStep />;
    case 1:
      return <SmsStep />;
    case 2:
      return <DocumentsStep />;
    case 3:
      return <HomeStep />;
    case 4:
      return <EmployerStep />;
    default:
      return <div>Not Found</div>;
  }
}







const MainForm () =>  {
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;

  const _handleBack = () => {
    setActiveStep(activeStep - 1);
  }


  return (
    <form className={s["main-from"]}>
      <div className={cn("main-container")}>
        <div className="wrap">
          <div className={s.header}>
            

          </div>
          <div className={s.body}>
            <div className={cn(s.column, s.column_pos_1)}></div>
            <div className={cn(s.column, s.column_pos_2)}></div>
          </div>
        </div>
      </div>
    </form>
  );
}

export { MainForm };

