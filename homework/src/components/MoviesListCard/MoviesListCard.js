import React from "react";
import StarRatings from "react-star-ratings";

const MoviesListCard = (props) => {
    return <div>
        <img src={`https://image.tmdb.org/t/p/w500${props.film.backdrop_path}`} alt="filmPhoto"/>
        <h2>{props.film.title}</h2>
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