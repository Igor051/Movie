import React from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

const Movie = (props) => {
    return <div>
        {props.film.title}
    </div>
};

let mapStateToProps = (state) => ({
    film: state.filmsPage.film
});

export default compose(
    connect(mapStateToProps),
    withRouter
)(Movie)