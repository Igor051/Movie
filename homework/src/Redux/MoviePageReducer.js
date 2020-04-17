import {MovieAPI} from "../api/api";

const SET_MOVIE = 'movieReducer/SET_MOVIE';

let initialState = {
    movie: {
        genres: [{id: '', name: ''}],
        original_title: '',
        overview: '',
        poster_path: '',
        production_companies: [],
        production_countries: [],
        release_date: '',
        runtime: '',
        spoken_languages: [{name: ''}],
        status: '',
        tagline: '',
        title: '',
        homepage:'',
        vote_average: 0
    }
};

const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE: {
            return {...state, movie: action.movie}
        }
        default:
            return state
    }
};

const setMovieAC = (movie) => ({type: SET_MOVIE, movie});

export const getMoviePage = (movieId) => async (dispatch) => {
    let movie = await MovieAPI.getMovie(movieId);
    dispatch(setMovieAC(movie.data))
};

export default MovieReducer