import { addPostsRequest, getPostsFailure, getPostsRequest, getPostsSuccess } from "../../../redux/feedRedux/action"


export const getPosts = () => (dispatch) => {

    const requestAction = getPostsRequest();
    dispatch(requestAction);

    return (
        fetch("https://fakenewsserver.herokuapp.com/posts")
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            const successAction = getPostsSuccess(res);
            dispatch(successAction)
        })
        .catch((res) => {
            const failureAction = getPostsFailure();
            dispatch(failureAction);
        })
    )
}

export const addPosts = (icon, name, bio, time, status, img, like, comments) => (dispatch) => {

    const requestAction = addPostsRequest();
    dispatch(requestAction);

    return (
        fetch("https://fakenewsserver.herokuapp.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
              body: JSON.stringify({
                icon: icon,
                name: name,
                bio: bio,
                time: time,
                status: status,
                like: like,
                comments: comments
            })
        })
        .then((res) => res.json())
    )

}