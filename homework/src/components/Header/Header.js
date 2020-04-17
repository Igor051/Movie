import React from "react";
import Switcher from "../common/Switcher";
import {connect} from "react-redux";
import {changeTheme} from "../../Redux/filmsReducer";
import cn from 'classnames'
import style from './Header.module.css'
import userIcon from '../../assets/userIcon.png'

const Header = (props) => {
    return <div className={cn({[style.darkTheme]: props.darkTheme}, style.header)}>
        <Switcher changeTheme={props.changeTheme} darkTheme={props.darkTheme}/>
        <div className={style.userInfo}><div><img src={userIcon} alt="userIcon"/></div></div>
    </div>
};

let mapStateToProps = (state) => ({
    darkTheme: state.filmsPage.darkTheme
});

export default connect(mapStateToProps, {changeTheme})(Header)