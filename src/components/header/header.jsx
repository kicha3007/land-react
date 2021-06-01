import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Logo } from '../ui/logo';
import { Chat } from '../chat';
import { Phone } from '../ui/phone';
import s from './header.module.scss';

const Header = ({
  modIndent = '',
}) => {
  Header.propTypes = {
    modIndent: PropTypes.string,
  };

  return (
    <header className={cn(s.header, modIndent)}>
      <div className={cn('main-container', s.container)}>
        <div className={s.wrap}>
          <div className={cn(s.column, s.column_pos_1)}>
            <Logo image="/static/images/logo.svg" />
          </div>
          <div className={cn(s.column, s.column_pos_2)}>
            <Chat image="/static/images/chat.svg" text="чат" headerClassName={s.header} indentRight="indent-right" />
            <Phone phone="8 812 700-10-20" text="Бесплатно по России" />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
