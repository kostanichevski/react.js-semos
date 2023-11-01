import { FETCH_COMMENTS_SUCCESS } from "../../constants/CommentsConstants";
import { FETCH_COMMENTS_FAIL } from "../../constants/CommentsConstants";

const initialState = {
  comments: [],
  errorMessage: undefined,
};

const CommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
      };
    case FETCH_COMMENTS_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default CommentsReducer;
