import React from "react";
import {connect} from "react-redux";
import {getFilms, getFilmsForGenre, getGenres, setFilm} from "../Redux/filmsReducer";
import MoviesListCard from "./MoviesListCard/MoviesListCard";
import Paginator from "./common/Paginator";
import style from './MoviesList.module.css'
import GenreBadge from "./GenreBadge/GenreBadge";

class MoviesList extends React.Component {
    componentDidMount() {
        this.props.getFilms(this.props.currentPage);
        this.props.getGenres()
    }

    render() {
        return <div className={style.movieList}>
            <GenreBadge genres={this.props.genres} getFilmsForGenre={this.props.getFilmsForGenre}
                        activeGenre={this.props.activeGenre}/>
            <Paginator portionSize={10} totalItemsCount={this.props.films.data.total_results} pageSize={20}
                       currentPage={this.props.currentPage} onPageChanged={this.props.getFilms}/>
            <div>
                {this.props.films.data.results.map(film => <MoviesListCard key={film.id} film={film}
                                                                           setFilm={this.props.setFilm}/>)}
            </div>
        </div>
    }
}

let mapStateToProps = (state) => ({
    films: state.filmsPage.films,
    currentPage: state.filmsPage.currentPage,
    genres: state.filmsPage.genres,
    activeGenre: state.filmsPage.activeGenre
});


export default connect(mapStateToProps, {getFilms, setFilm, getFilmsForGenre, getGenres})(MoviesList)