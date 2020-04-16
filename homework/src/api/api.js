import * as axios from 'axios'

const instance = axios.create({

});

export const API = {
    getFilm(page) {
        return instance.get(`https://api.themoviedb.org/3/discover/movie?page=${page}&api_key=b72c3ecf2c197208ad7fc0b3524c8ccc`)
            // .then(res=>instance.get(`https://image.tmdb.org/t/p/w500${res.results[0].backdrop_path}`));
    }
};

