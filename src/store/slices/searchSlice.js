import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { filmsAPI } from "../../api/api";

export const fetchSearch = createAsyncThunk(
    'fetchSearch',
    async (text) => {
        const response = await filmsAPI.getSearch(text);

        const data = await response.data.results;

        return data
    }
)

const searchSlice = createSlice({
    name: "searchSlice",
    initialState: {
        search: [],
        text: ''
    },
    reducers: {
        changeText: (state, action) => {
            state.text = action.payload
        }
    },
    extraReducers: {
        [fetchSearch.fulfilled]: (state, action) => {
            state.search = action.payload
        }
    }
});

export const { changeText } = searchSlice.actions;
export default searchSlice.reducer;