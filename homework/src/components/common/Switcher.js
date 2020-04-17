import React from "react";
import style from "./Switcher.module.css";

const Switcher = (props) => {
    return <div className={style.switch} onClick={() => props.changeTheme(props.darkTheme)}>
        <input type="checkbox" checked={props.darkTheme}/>
        <span className={style.slider}></span>
    </div>
};

export default Switcher