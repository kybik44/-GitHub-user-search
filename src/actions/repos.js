import axios from "axios";
import { setRepos, setIsFetching } from "../reducers/reposReducer";
import { setUser } from "../reducers/userReducer";
export const getRepos = (userInput, currentPage, perPage) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const repositories = await axios.get(`https://api.github.com/users/${userInput}/repos?per_page=${perPage}&page=${currentPage}`);
        dispatch(setRepos(repositories.data))
    }
  
}
export const getUser = (userInput) => {
    return async (dispatch) => {
        const userInfo = await axios.get(`https://api.github.com/users/${userInput}`);
        dispatch(setUser(userInfo.data))

    }
  
}