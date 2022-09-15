import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { movieApi, apiKey } from '../apis/baseUrl';

const initialState = {
    moviesResponse: {},
    selectedMovie: {},
    showsResponse: {}
}

export const fetchAllMovies = createAsyncThunk('/fetchAllMovies', async () => {
    const response = await movieApi.get(`/?apikey=${apiKey}&type=movie&s=harry`);
    return response.data
})

export const fetchAllShows = createAsyncThunk('/fetchAllShows', async () => {
    const response = await movieApi.get(`/?apikey=${apiKey}&type=series&s=friends`);
    return response.data;
})

export const fetchSelectedMovie = createAsyncThunk('/fetchSelectedMovie', async (id) => {
    const response = await movieApi.get(`/?apikey=${apiKey}&plot=full&i=${id}`);
    return response.data;
})

export const searchAllMovies = createAsyncThunk('/searchAllMovies', async (query) => {
    const response = await movieApi.get(`/?apikey=${apiKey}&type=movie&s=${query}`);
    return response.data;
})

export const searchAllShows = createAsyncThunk('/searchAllShows', async (query) => {
    const response = await movieApi.get(`/?apikey=${apiKey}&type=series&s=${query}`);
    return response.data;
})

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        clearSelected: (state) => {
            state.selectedMovie = {}
        }
    },

    extraReducers: {
        [fetchAllMovies.pending]: () => {
            // console.log('Pending...')
        },
        [fetchAllMovies.fulfilled]: (state, { payload }) => {
            return { ...state, moviesResponse: payload }
        },
        [fetchAllShows.fulfilled]: (state, { payload }) => {
            return { ...state, showsResponse: payload }
        },
        [fetchSelectedMovie.fulfilled]: (state, { payload }) => {
            return { ...state, selectedMovie: payload }
        },
        [searchAllMovies.fulfilled]: (state, { payload }) => {
            return { ...state, moviesResponse: payload }
        },
        [searchAllShows.fulfilled]: (state, { payload }) => {
            return { ...state, showsResponse: payload }
        },
    }
})

export default movieSlice.reducer;
export const { clearSelected } = movieSlice.actions;