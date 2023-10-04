import { useEffect, useState } from "react";

export const Posts = () => {
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((result) => setPosts(result));
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      {Posts.map((post) => {
        return (
          <div key={post.id}>
            <p>ID{}</p>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
          </div>
        );
      })}
    </div>
  );
};
