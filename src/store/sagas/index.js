import { all, takeEvery } from 'redux-saga/effects';
import movies from "./movies";

//Movies
import { MoviesTypes } from "../ducks/movies";
import { setMovies } from "./movies";

export default function* rootSaga() {
  yield all([
    takeEvery(MoviesTypes.SET_MOVIES, setMovies)
  ]);
}