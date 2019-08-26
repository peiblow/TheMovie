import { combineReducers } from "redux";

import {reducer as movies} from "./movies";
import { reducer as users } from './users';

export default combineReducers({
    movies,
    users
})