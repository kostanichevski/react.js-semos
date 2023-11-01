import { FETCH_COMMENTS_SUCCESS } from "../../constants/CommentsConstants";
import { FETCH_COMMENTS_FAIL } from "../../constants/CommentsConstants";

export const fetchCommentsSuccess = (comments) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
  };
};

export const fetchCommentsFail = (error) => {
  return {
    type: FETCH_COMMENTS_FAIL,
    payload: error,
  };
};

export const fetchCommentsRequest = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((json) => dispatch(fetchCommentsSuccess(json))) //call is successfull, we have the json with the comments
      .catch((err) => dispatch(fetchCommentsFail(err)));
  };
};
