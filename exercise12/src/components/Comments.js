import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCommentsRequest } from "../redux/actions/CommentsActions";

export const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.CommentsReducer.comments);

  useEffect(() => {
    dispatch(fetchCommentsRequest());
  }, [dispatch]);

  return (
    <div>
      <h1>These are the comments for our cakes</h1>
      <div>
        {comments.map((comments) => {
          return (
            <div key={comments.id}>
              <p>Name: {comments.name}</p>
              <p>Email: {comments.email}</p>
              <p>Body: {comments.body}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};
