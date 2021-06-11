import React, { useState } from 'react';
import cn from 'classnames';
import { Formik, Form } from 'formik';
import s from './main-form.module.scss';

import { Stepper } from '../stepper';
import { Tags } from '../ui/tags';
import { Button } from '../ui/button';
import {
  DocumentsStep, EmployerStep, HomeStep, InfoStep, SmsStep,
} from './steps-form';

import { formFieldsModel } from './form-model/form-fields-model';
import { formInitialValues } from './form-model/form-initial-values';
import { validationSchema } from './form-model/validation-sheme';

const { formId, formFields } = formFieldsModel;

import { smsAeroService } from '../../services/sms-aero-service';

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

const formClasses = {
  row: s.row,
  column: s['inner-column'],
  column_pos_1: s['inner-column_pos_1'],
  column_pos_2: s['inner-column_pos_2'],
  'input-wrap': s['input-wrap'],
};

const renderStepContent = (step) => {
  switch (step) {
    case 0:
      return <InfoStep formFields={formFields} formClasses={formClasses} />;
    case 1:
      return <SmsStep formFields={formFields} />;
    case 2:
      return <DocumentsStep formFields={formFields} />;
    case 3:
      return <HomeStep formFields={formFields} />;
    case 4:
      return <EmployerStep formFields={formFields} />;
    default:
      return <div>Not Found</div>;
  }
};

const MainForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const submitForm = (values, actions) => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmiting(false);

    setActiveStep(activeStep + 1);
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
    <Formik
      onSubmit={handleSubmit}
      initialValues={formInitialValues}
      validationSchema={currentValidationSchema}
    >
      {({ isSubmitting }) => (
        <Form className={s['main-form']} id={formId}>
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
        </Form>
      )}
    </Formik>
  );
};

export { MainForm };
