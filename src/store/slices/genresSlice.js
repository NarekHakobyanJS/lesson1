import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {filmsAPI} from '../../api/api';

export const fetchGenres = createAsyncThunk(
    'fetchGenres',
    async () => {
        const response = await filmsAPI.getGenres()

        const data = await response.data.genres 

        return data
    }
)

export const fetchGenresByMovie = createAsyncThunk(
    'fetchGenresByMovie',
    async ({genre, pageNumber}) => {
        const response = await filmsAPI.getMovieByGenres(genre, pageNumber)

        const data = await response.data.results 

        return data
    }
)


const genresSlice = createSlice({
    name : 'genresSlice',
    initialState : {
        genres : [],
        genresFilm : [],
        pageNumber : 1
    },
    reducers : {
        changePageGnere(state, action){
            state.pageNumber = state.pageNumber + 1
        }
    },
    extraReducers : {
        [fetchGenres.fulfilled] : (state, action) => {
            state.genres = action.payload
        },
        [fetchGenresByMovie.fulfilled] : (state, action) => {
            state.genresFilm = action.payload
        }
    }
})

export const {changePageGnere} = genresSlice.actions
export default genresSlice.reducer