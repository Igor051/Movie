import * as axios from 'axios'

export const API = {
    getFilm(page, genreId) {
        return axios.get(`https://api.themoviedb.org/3/discover/movie?page=${page}&api_key=b72c3ecf2c197208ad7fc0b3524c8ccc&with_genres=${genreId}`)
    },
    getGenres() {
        return axios.get(`http://api.themoviedb.org/3/genre/movie/list?api_key=b72c3ecf2c197208ad7fc0b3524c8ccc`).then(genres => {
            return genres.data.genres
        })
    },
    getByTitle(title) {
        return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b72c3ecf2c197208ad7fc0b3524c8ccc&query=${title}`)
    },
    getByAll(page, genreId, title) {
        return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b72c3ecf2c197208ad7fc0b3524c8ccc&query=${title}&with_genres=${genreId}&page=${page}`)
    }
};

export const MovieAPI = {
    getMovie(movieId) {
        return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b72c3ecf2c197208ad7fc0b3524c8ccc&language=en-US`)
    }
};

