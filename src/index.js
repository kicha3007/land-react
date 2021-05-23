import Log from "./log"
import Calc from "./calc"
import img from "./react-icon.png";
import React from "react";
import ReactDOM from "react-dom";
import  "./main.scss";
import mainModule from "./main.module.scss";

const App =  () => {

  return <div className={""}>Hello1 <span className={mainModule.red}> sdlfkjnsldnflnj</span></div>;
}

ReactDOM.render(<App />, document.getElementById("root"));


const el = document.createElement("img");
el.src = img;
document.body.appendChild(el);

const calc = new Calc();
const log = new Log();


log.log(calc.add(1,2,3))

