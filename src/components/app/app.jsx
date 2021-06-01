import React, { Fragment } from 'react';
import { Header } from '../header';
import { MainScreen } from '../main-screen';
import s from './app.module.scss';

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
  </>
);

export { App };
