import React from "react";
import {connect} from "react-redux";

const MoviesPage = () => {
    return <div>

    </div>
};

let mapStateToProps = (state) => ({
    films: state.filmsPage.films,
    currentPage:state.filmsPage.currentPage
});

export default connect()(MoviesPage)