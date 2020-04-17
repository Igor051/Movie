import React from "react";
import StarRatings from "react-star-ratings";
import {NavLink} from "react-router-dom";
import style from './MoviesListCard.module.css'

const MoviesListCard = (props) => {
    return <div className={style.movieCard}>
        <NavLink to={`/film/${props.film.id}`} className={style.movieBlock}>
            <div onClick={()=>props.setFilm(props.film)}>
            <img src={`https://image.tmdb.org/t/p/w500${props.film.backdrop_path}`} alt="filmPhoto"/>
            <h2>{props.film.title}</h2>
            </div>
        </NavLink>
            <div>rating {props.film.vote_average}/10</div>
            <StarRatings
                rating={props.film.vote_average}
                starDimension="20px"
                starRatedColor="gold"
                numberOfStars={10}
                name='rating'
            />
            <br/>
            <div>{props.film.overview}</div>

    </div>

};

export default MoviesListCard