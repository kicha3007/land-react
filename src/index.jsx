import React from 'react';
import ReactDOM from 'react-dom';
import Log from './log';
import Calc from './calc';
import img from './react-icon.png';
import './main.scss';
import mainModule from './main.module.scss';

const App = () => (
  <div className="">
    Hello1
    <span className={mainModule.red}> sdlfkjnsldnflnj</span>
  </div>
);

ReactDOM.render(<App />, Window.document.getElementById('root'));

const el = document.createElement('img');
el.src = img;
document.body.appendChild(el);

const calc = new Calc();
const log = new Log();

log.log(calc.add(1, 2, 3));
