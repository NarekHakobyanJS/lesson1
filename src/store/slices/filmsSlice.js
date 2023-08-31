import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { filmsAPI } from "../../api/api";

export const fetchFilms = createAsyncThunk("fetchFilms", async (pageNumber) => {
  const response = await filmsAPI.getMoviesByPage(pageNumber);
  const data = await response.data.results;
  return data;
});

export const fetchFilmId =createAsyncThunk("fetchFilmId",async (id) => {
    const response = await filmsAPI.getMoveById(id);
    const data = await response.data
    return data
} )

const filmsSlice = createSlice({
  name: "filmsSlice",
  initialState: {
    films: [],
    film: {},
    pageNumber: 1,
    isPanding: false,
  },
  reducers: {
    changePage(state, action) {
      state.pageNumber = state.pageNumber + 1;
    },
  },
  extraReducers: {
    [fetchFilms.pending]: (state, action) => {
      state.isPanding = true
    },
    [fetchFilms.fulfilled]: (state, action) => {
      state.films = action.payload;
      state.isPanding = false
    },
    [fetchFilmId.fulfilled]: (state, action) => {
      state.film = action.payload;
    },
  },
});

export const { changePage } = filmsSlice.actions;
export default filmsSlice.reducer;
