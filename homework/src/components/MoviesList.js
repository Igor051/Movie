import React from "react";
import {connect} from "react-redux";
import {changeTheme, getFilms, getFilmsForGenre, getGenres, setFilm} from "../Redux/filmsReducer";
import MoviesListCard from "./MoviesListCard/MoviesListCard";
import Paginator from "./common/Paginator";
import style from './MoviesList.module.css'
import GenreBadge from "./GenreBadge/GenreBadge";
import Header from "./Header/Header";
import cn from 'classnames'

class MoviesList extends React.Component {
    componentDidMount() {
        this.props.getFilms(this.props.currentPage);
        this.props.getGenres()
    }

    render() {
        return <div className={cn({[style.darkTheme]: this.props.darkTheme}, style.movieList)}>
            <GenreBadge genres={this.props.genres} getFilmsForGenre={this.props.getFilmsForGenre}
                        activeGenre={this.props.activeGenre} darkTheme={this.props.darkTheme}/>
            <Paginator portionSize={10} totalItemsCount={this.props.films.data.total_results} pageSize={20}
                       currentPage={this.props.currentPage} onPageChanged={this.props.getFilms}
                       darkTheme={this.props.darkTheme}/>
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
    activeGenre: state.filmsPage.activeGenre,
    darkTheme: state.filmsPage.darkTheme
});


export default connect(mapStateToProps, {getFilms, setFilm, getFilmsForGenre, getGenres})(MoviesList)