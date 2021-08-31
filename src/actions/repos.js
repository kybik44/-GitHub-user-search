import axios from "axios";
import {
    setRepos,
    setIsFetching,
    setFetchError
} from "../reducers/reposReducer";
import {
    setUser
} from "../reducers/userReducer";

export const getRepos = (userInput, currentPage, perPage) => {
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true))
            dispatch(setFetchError(false))
            const repositories = await axios.get(`https://api.github.com/users/${userInput}/repos?per_page=${perPage}&page=${currentPage}`);
            dispatch(setRepos(repositories.data))
        } catch (e) {
            dispatch(setFetchError(true))
            dispatch(setIsFetching(false))
        }

    }

}
export const getUser = (userInput) => {
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true))
            dispatch(setFetchError(false))
            const userInfo = await axios.get(`https://api.github.com/users/${userInput}`);
            dispatch(setUser(userInfo.data))
        } catch (e) {
            dispatch(setFetchError(true))
            dispatch(setIsFetching(false))
        }


    }

}