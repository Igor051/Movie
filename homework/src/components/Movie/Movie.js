import React from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getMoviePage} from "../../Redux/MoviePageReducer";
import StarRatings from "react-star-ratings";
import style from './Movie.module.css'
import cn from 'classnames'
import Switcher from "../common/Switcher";
import {changeTheme} from "../../Redux/filmsReducer";

class Movie extends React.Component {
    componentDidMount() {
        this.props.getMoviePage(this.props.match.params.id)
    }

    render() {
        return <div className={cn({[style.darkTheme]: this.props.darkTheme}, style.moviePage)}>
            <div className={style.movieImg}><img src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`}
                                                 alt="poster"/></div>
            <div className={style.movieDescription}>
                <h2>{this.props.movie.title}</h2>
                <StarRatings
                    rating={this.props.movie.vote_average}
                    starDimension="20px"
                    starRatedColor="gold"
                    numberOfStars={10}
                    name='rating'
                />
                <div className={style.movieOverview}>{this.props.movie.overview}</div>
                <div className={style.releaseDate}><span>Release date: </span>{this.props.movie.release_date}</div>
                <div className={style.anotherInfo}>
                    <div><b>Companies:</b> {this.props.movie.production_companies.map(company => <div
                        key={company.id}>{company.name}, </div>)}</div>
                    <div><b>Countries:</b> {this.props.movie.production_countries.map(country => <div key={country.id}>
                        {country.name}, </div>)}</div>
                    <div><b>Genres: </b>{this.props.movie.genres.map(genre => <div
                        key={genre.id}>{genre.name},</div>)}</div>
                    <div><b>Run time: </b>{this.props.movie.runtime} min</div>
                    <div><a href={this.props.movie.homepage}>Movie Home page</a></div>
                </div>
            </div>

        </div>
    }
}

let mapStateToProps = (state) => ({
    movie: state.moviePage.movie,
    darkTheme: state.filmsPage.darkTheme
});

export default compose(
    connect(mapStateToProps, {getMoviePage, changeTheme}),
    withRouter
)(Movie)