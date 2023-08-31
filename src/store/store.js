import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "./slices/genresSlice";
import filmsSlice from "./slices/filmsSlice";
import searchSlice from './slices/searchSlice';

const store = configureStore({
    reducer : {
        genresData : genresSlice,
        filmsData : filmsSlice,
        searchData : searchSlice,
    }
})

export default store;
