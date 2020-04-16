import {API} from "../api/api";

const SET_FILMS = 'SET_FILMS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    films: {data: {page: null, results: []}},
    currentPage: 1
};


const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS: {
            return {...state, films: action.films}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        default:
            return state
    }
};

const setFilmsAC = (films) => ({type: SET_FILMS, films});
const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const getFilms = (page) => async (dispatch) => {
    let films = await API.getFilm(page);
    dispatch(setFilmsAC(films));
    dispatch(setCurrentPageAC(page))

};

export default filmsReducer