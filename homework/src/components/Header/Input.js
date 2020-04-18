import React from "react";
import {Field, reduxForm} from "redux-form";

const InputForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field  placeholder={'Search film'} name={'filmQuery'} component={'input'}/>
        <button>Search</button>
    </form>
};

const InputReduxForm = reduxForm({form: 'search'})(InputForm);
export default InputReduxForm