import { appConstants } from "./actionTypes";

export const getPostsRequest = () => {
    return {
      type: appConstants.GET_POSTS_REQUEST,
      payload: {
        isLoading: true
      }
    };
};
 
export const getPostsSuccess = (posts) => {
    return {
      type: appConstants.GET_POSTS_SUCCESS,
      payload: {
        posts: posts,
        isLoading: false
      }
    };
};
  
export const getPostsFailure = () => {
    return {
      type: appConstants.GET_POSTS_FAILURE,
      payload: {
        isError: true
      }
    };
};

export const addPostsRequest = () => {
    return {
      type: appConstants.ADD_POSTS_REQUEST,
      payload: {
        isLoading: true
      }
    };
  };
  
  export const addPostsSuccess = (posts) => {
    return {
      type: appConstants.ADD_POSTS_SUCCESS,
      payload: {
        posts: posts,
        isLoading: false
      }
    };
  };
  
  export const addPostsFailure = () => {
    return {
      type: appConstants.ADD_POSTS_FAILURE,
      payload: {
        isError: true
      }
    };
  };