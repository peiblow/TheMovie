import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    setMovies: [ 'payload' ],
    setMoviesSuccess: [ 'payload' ],
    setPopularMovie: [ 'payload' ],
    setTopRatingMovie: [ 'payload' ]
});

const INITIAL_STATE = {
    list: [],
    topRatingMovies: [],
    popularMovie: [],
    loading: true
}

export const setMoviesSuccess = (state = INITIAL_STATE, action) => {
    let payload = action.payload;
    return {
        ...state,
        list: payload.results,
        loading: false
    }
}

export const setPopularMovie = (state = INITIAL_STATE, action) => {
    let payload = action.payload;
    var min=0; 
    var max=19;  
    var random = Math.floor(Math.random() * (+max - +min)) + +min; 
    return {
        ...state,
        popularMovie: payload.results[random]
    }
}

export const setTopRatingMovie = (state = INITIAL_STATE, action) => {
    let payload = action.payload;
    return {
        ...state,
        topRatingMovies: payload.results
    }
}

export const HANDLERS = {
    [Types.SET_MOVIES_SUCCESS]: setMoviesSuccess,
    [Types.SET_POPULAR_MOVIE]: setPopularMovie,
    [Types.SET_TOP_RATING_MOVIE]: setTopRatingMovie
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)

export const MoviesTypes = Types;
export default Creators;