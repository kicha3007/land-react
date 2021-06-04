import React, { useState } from 'react';
import cn from 'classnames';
import { Formik, form } from 'formik';
import s from './main-form.module.scss';

import { Stepper } from '../stepper';
import { Tags } from '../ui/tags';
import { Button } from '../ui/button';
import {
  DocumentsStep, EmployerStep, HomeStep, InfoStep, SmsStep,
} from './steps-form';

const steps = [
  {
    text: 'Заполните информацию',
    id: 1,
  },
  {
    text: 'Подтвердите мобильный телефон',
    id: 2,
  },
  {
    text: 'Документы',
    id: 3,
  },
  {
    text: 'Место жительства',
    id: 4,
  },
  {
    text: 'Работодатель',
    id: 5,
  },
];

const tags = [
  {
    text: 'кэшбек до 2% на всё',
    id: 1,
  },
  {
    text: 'бесплатная доставка',
    id: 2,
  },
  {
    text: 'бесплатное обслуживание',
    id: 3,
  },
  {
    text: '3% на остаток',
    id: 4,
  },
];

const renderStepContent = (step) => {
  switch (step) {
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
};

const MainForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;



  const submitForm = (values, actions) => {
    // alert(JSON.stringify(values, null , 2));
    // actions.setSubmiting(false);

    //setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <Formik onSubmit={handleSubmit}>
      <form className={s['main-form']}>
        <div className={cn('main-container')}>
          <div className={s.wrap}>
            <div className={s.header}>
              <div className={cn(s['header-column'], s['header-column_pos_1'])}>
                {steps[activeStep].text}
              </div>
              <div className={cn(s['header-column'], s['header-column_pos_2'])}>
                <Stepper activeStep={activeStep} stepsArr={steps} />
              </div>
            </div>
            <div className={s.body}>
              <div className={s['inner-wrap']}>
                <div className={cn(s.column, s.column_pos_1)}>
                  {renderStepContent(activeStep)}
                </div>
                <div className={cn(s.column, s.column_pos_2)}>
                  <div className={s['image-box']}>
                    <img src="/static/images/card.png" alt="" />
                  </div>
                  <Tags tagsList={tags} />
                </div>
              </div>
              <div className={s.buttons}>
                <div className={s['buttons-wrap']}>
                  <div className={cn(s['buttons-column'], s['buttons-column_pos_1'])}>
                    <div className={s['buttons-wrap']}>
                      <Button text="далее" disabled type="submit" />
                    </div>
                  </div>
                  <div className={cn(s['buttons-column'], s['buttons-column_pos_2'])}>
                    <div className={s.note}>
                      * – поля обязательные для заполнения
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Formik>
  );
};

export { MainForm };
