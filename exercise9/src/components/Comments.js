import { useState, useEffect } from "react";
import { API_URL } from "../uttils/constants";
import { Link } from "react-router-dom";
import { getComments } from "../service/commentsService";

export const Comments = () => {
  const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   fetch(`${API_URL}/comments`)
  //     .then((res) => res.json())
  //     .then((result) => setComments(result))
  //     .catch((err) => alert(err));
  // }, []);

  useEffect(() => {
    console.log("inside useEffect");
    getComments().then((result) => setComments(result));
  }, []);

  return (
    <div>
      <h1>Comments</h1>
      {comments.length > 0 ? (
        <div>
          {comments.map((comment) => {
            return (
              <div key={comment.id}>
                <span>Id: {comment.id}</span>
                <p>Name: {comment.name}</p>
                <Link to={"/single-comment/" + comment.id}>Details...</Link>
                <hr />
              </div>
            );
          })}
        </div>
      ) : (
        <h2>Loading comments ....</h2>
      )}
    </div>
  );
};
