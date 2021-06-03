import React, { Fragment } from 'react';
import s from './app.module.scss';

import { Header } from '../header';
import { MainScreen } from '../main-screen';
import { MainForm } from '../main-form';

const App = () => (
  <>
    <Header
      modIndent={s['mod-indent']}
    />
    <MainScreen
      title="All-in-one"
      text="Дебетовая карта с неограниченным кэшбеком и ежедневным процентом на остаток"
      buttonText="Оформить онлайн"
    />
    <MainForm />
  </>
);

export { App };
