import React from "react";
import "./styles.css";
import { Link } from "react-scroll";

const Screen = (props) => {

  const nextSequency = Number(props.sequency) === 19 ? 1 : Number(props.sequency) + 1;

  return (
    <div id={Number(props.sequency)} className="screen-full" style={{background: props.bgColor, color: props.textColor}}>
      <div className="container">
        <header>
          <img src={props.imageUrl} alt="simple gif" />
        </header>
        <div>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
        <footer>
          <Link
            activeClass="active"
            to={nextSequency}
            spy={true}
            smooth={true}
            offset={0}
            duration={1200}
            ignoreCancelEvents={true}
          >{props.btnText}</Link>
        </footer>
      </div>
    </div>
  );
};

export default Screen;
