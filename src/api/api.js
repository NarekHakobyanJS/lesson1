import axios from "axios";

const apiKey = 'f36f23edf6e10fd2ddcf939916b1f67a';

const instanse = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export const filmsAPI = {
    getGenres() {
        return instanse.get(`/genre/movie/list?api_key=${apiKey}&language=en-US`)
    },
    getMoviesByPage(pageNumber){
        return instanse.get(`/discover/movie?api_key=${apiKey}&language=en-US&page=${pageNumber}`)
    },
    getMoveById(id){
        return instanse.get(`/movie/${id}?api_key=${apiKey}&language=en-US`)
    },
    getSearch(text){
        return instanse.get(`/search/movie?api_key=${apiKey}&query=${text}`)
    },
    getMovieByGenres(genreId, pageNumber){
        return instanse.get(`/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${genreId}&page=${pageNumber}`)
    }
}
