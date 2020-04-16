import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getFilms} from "../Redux/filmsReducer";
import MoviesListCard from "./MoviesListCard/MoviesListCard";
import Paginator from "./common/Paginator";

class MoviesList extends React.Component {
    componentDidMount() {
        this.props.getFilms(this.props.currentPage)
    }

    render() {
        return <div>
            <Paginator portionSize={10} totalItemsCount={this.props.films.data.total_results} pageSize={20}
                       currentPage={this.props.currentPage} onPageChanged={this.props.getFilms}/>
            {this.props.films.data.results.map(film => <MoviesListCard film={film}/>)}
        </div>
    }
}

let mapStateToProps = (state) => ({
    films: state.filmsPage.films,
    currentPage: state.filmsPage.currentPage
});


export default connect(mapStateToProps, {getFilms})(MoviesList)