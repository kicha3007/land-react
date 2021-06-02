import React from 'react';
import cn from 'classnames';
import s from './main-from.module.scss';

class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      userName: '',
      email: '',
      password: ''
    }
  },
  render() {
    return (
      <form className={s["main-from"]}>
        <div className={cn("main-container")}>
          <div className="wrap">
            <div className={s.header}></div>
            <div className={s.body}>
              <div className={cn(s.column, s.column_pos_1)}></div>
              <div className={cn(s.column, s.column_pos_2)}></div>
            </div>
          </div>
        </div>
      </form>
    );
  };
}

export { MainForm };

