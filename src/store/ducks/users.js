import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    setUser: [ 'payload' ],
    addMovieList: [ 'payload' ],
    setLogout: [ 'payload' ]
});

const INITIAL_STATE = {
    user: [],
    logged: false
}

export const setUser = (state = INITIAL_STATE, action) => {
    let { username } = action.payload;
    
    let newUser = {
        _id: Math.random(),
        name: username,
        list: []
    }

    return {
        ...state,
        user: newUser,
        logged: true
    }
}

export const addMovieList = (state = INITIAL_STATE, action) => {
    let { dados } = action.payload
    let oldList = state.user.list

    let newUser = {
        ...state.user,
        list: oldList ? [ ...oldList, dados ] : [ dados ],
    }
    
    return {
        ...state,
        user: newUser
    }
}

export const setLogout = (state = INITIAL_STATE, action) => ({
    ...state,
    user: [],
    logged: false
})

export const HANDLERS = {
    [Types.SET_USER]: setUser,
    [Types.ADD_MOVIE_LIST]: addMovieList,
    [Types.SET_LOGOUT]: setLogout
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)

export const UserTypes = Types;
export default Creators;