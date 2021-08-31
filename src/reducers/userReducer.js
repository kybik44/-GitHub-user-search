const SET_USER = "SET_USER"

const defaultState = {
    items: [],
    user: {},
    isFetching: true,
    currentPage: 1,
    perPage: 4,
    totalCount: 0
};



export function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                totalCount: action.payload.public_repos,
            }
        default:
            return state
    }
};
export const setUser = (user) => ({type: SET_USER, payload: user})