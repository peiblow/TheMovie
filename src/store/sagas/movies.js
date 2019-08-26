import { call, put, all } from "redux-saga/effects";
import MoviesActions from "../ducks/movies";

import MoviesRequest from '../../services/movies_request';

export function* setMovies() {
    try{
        const [popularResponse, topRatingResponse] = yield all([
            call(MoviesRequest.getPopularMovies),
            call(MoviesRequest.getTopRatingMovies)
          ])
        yield all([
            put(MoviesActions.setMoviesSuccess(popularResponse.data)),
            put(MoviesActions.setPopularMovie(popularResponse.data)),
            put(MoviesActions.setTopRatingMovie(topRatingResponse.data))
        ]);
    }catch( err ){
        console.log(err)
    } 
}