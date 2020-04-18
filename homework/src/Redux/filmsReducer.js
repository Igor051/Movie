import {API} from "../api/api";

const SET_FILMS = 'SET_FILMS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_FILM_ID = 'SET_FILM_ID';
const SET_GENRE = 'SET_GENRE';
const SET_GENRES = 'SET_GENRES';
const CHANGE_THEME = 'CHANGE_THEME';
const SET_TITLE = 'SET_TITLE';

let initialState = {
    films: {data: {page: null, results: []}},
    currentPage: 1,
    film: {},
    genres: [{id: 28, name: "Action"}, {id: 12, name: "Adventure"}, {id: 16, name: "Animation"}, {
        id: 35,
        name: "Comedy"
    }, {id: 80, name: "Crime"}, {id: 99, name: "Documentary"}, {id: 18, name: "Drama"}, {
        id: 10751,
        name: "Family"
    }, {id: 14, name: "Fantasy"}, {id: 36, name: "History"}, {id: 27, name: "Horror"}, {
        id: 10402,
        name: "Music"
    }, {id: 9648, name: "Mystery"}, {id: 10749, name: "Romance"}, {id: 878, name: "Science Fiction"}, {
        id: 10770,
        name: "TV Movie"
    }, {id: 53, name: "Thriller"}, {id: 10752, name: "War"}, {id: 37, name: "Western"}],
    activeGenre: 28,
    darkTheme: false,
    title: ''
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
        case SET_GENRE: {
            return {...state, activeGenre: action.genreId}
        }
        case SET_GENRES: {
            return {...state, genres: action.genres}
        }
        case CHANGE_THEME: {
            return {...state, darkTheme: !action.darkTheme}
        }
        case SET_TITLE: {
            return {...state, title: action.title}
        }
        default:
            return state
    }
};

const setFilmsAC = (films) => ({type: SET_FILMS, films});
const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
const setFilmAC = (film) => ({type: SET_FILM_ID, film});
const setGenreAC = (genreId) => ({type: SET_GENRE, genreId});
const setGenres = (genres) => ({type: SET_GENRES, genres});
const changeThemeAC = (darkTheme) => ({type: CHANGE_THEME, darkTheme});
const setTitle = (title) => ({type: SET_TITLE, title});

export const getFilms = (page) => async (dispatch, getState) => {
    try {
        if (getState().filmsPage.title) {
            let films = await API.getByAll(page, getState().filmsPage.activeGenre, getState().filmsPage.title);
            dispatch(setFilmsAC(films));

        } else {
            let films = await API.getFilm(page, getState().filmsPage.activeGenre);
            dispatch(setFilmsAC(films));
        }
        dispatch(setCurrentPageAC(page))

    } catch (e) {
    }

};

export const setFilm = (film) => (dispatch) => {
    dispatch(setFilmAC(film))
};

export const getFilmsForGenre = (genreId) => async (dispatch, getState) => {
    try {
        if (getState().filmsPage.title) {
            let films = await API.getByAll(getState().filmsPage.currentPage, genreId, getState().filmsPage.title);
            dispatch(setFilmsAC(films));
        } else {
            let films = await API.getFilm(getState().filmsPage.currentPage, genreId);
            dispatch(setFilmsAC(films));
        }
        dispatch(setGenreAC(genreId))

    } catch (e) {
    }

};

export const getGenres = () => async (dispatch) => {
    try {
        let genres = await API.getGenres();
        dispatch(setGenres(genres))
    } catch (e) {
    }

};

export const changeTheme = (darkTheme) => (dispatch) => {
    dispatch(changeThemeAC(darkTheme))
};

export const searchByTitle = (title) => async (dispatch, getState) => {
    if (title) {
        let films = await API.getByTitle(title);
        dispatch(setFilmsAC(films));
        dispatch(setTitle(title));
        dispatch(setCurrentPageAC(1))
    } else {
        let films = await API.getFilm(getState().filmsPage.currentPage, getState().filmsPage.activeGenre);
        dispatch(setFilmsAC(films));
        dispatch(setTitle(''))
    }
};

export default filmsReducer