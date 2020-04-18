import React from "react";
import Switcher from "../common/Switcher";
import {connect} from "react-redux";
import {changeTheme, searchByTitle} from "../../Redux/filmsReducer";
import cn from 'classnames'
import style from './Header.module.css'
import userIcon from '../../assets/userIcon.png'
import InputForm from "./Input";

const Header = (props) => {
    const onSubmit = (formData) => {
        props.searchByTitle(formData.filmQuery)
    };
    return <div className={cn({[style.darkTheme]: props.darkTheme}, style.header)}>
        <Switcher changeTheme={props.changeTheme} darkTheme={props.darkTheme}/>
        <div className={style.input}>
            <InputForm onSubmit={onSubmit}/>
        </div>
        <div className={style.userInfo}>
            <div><img src={userIcon} alt="userIcon"/></div>
        </div>
        <div className={style.name}>Igor Snigur</div>
    </div>
};

let mapStateToProps = (state) => ({
    darkTheme: state.filmsPage.darkTheme
});

export default connect(mapStateToProps, {changeTheme, searchByTitle})(Header)