import {API} from "../api/api";

const SET_FILMS = 'SET_FILMS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_FILM_ID = 'SET_FILM_ID';

let initialState = {
    films: {data: {page: null, results: []}},
    currentPage: 1,
    film: {}
};


const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS: {
            return {...state, films: action.films}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_FILM_ID: {
            return {...state, film: action.film}
        }
        default:
            return state
    }
};

const setFilmsAC = (films) => ({type: SET_FILMS, films});
const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
const setFilmAC = (film) => ({type: SET_FILM_ID, film});

export const getFilms = (page) => async (dispatch) => {
    let films = await API.getFilm(page);
    dispatch(setFilmsAC(films));
    dispatch(setCurrentPageAC(page))

};

export const setFilm = (film) => (dispatch) => {
    dispatch(setFilmAC(film))
};

export default filmsReducer