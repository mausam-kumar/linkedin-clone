import { appConstants } from "./actionTypes";


const initState = {
    posts: [],
    isLoading: true,
    isError: false
}

function postReducer (state = initState, action) {
    switch (action.type) {
        case appConstants.GET_POSTS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        }
        
        case appConstants.GET_POSTS_SUCCESS : {
            return {
                ...state,
                posts: action.payload.posts,
                isLoading: false
            };
        }
        case appConstants.GET_POSTS_FAILURE : {
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        }
        case appConstants.ADD_POSTS_REQUEST : {
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        }
        case appConstants.ADD_POSTS_SUCCESS : {
            return {
                ...state,
                isLoading: false
            };
        }
        case appConstants.ADD_POSTS_FAILURE : {
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        }
        default:
            return state;
    }
}

export default postReducer