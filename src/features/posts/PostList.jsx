import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsSlice";
import Post from "./Post";
import "./PostList.css"

export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts.slice(0, 15));
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {status === "loading" && <div>Loading...</div>}
      {status === "failed" && <div>{error}</div>}
      {status === "succeeded" && (
        <div className="post-list">
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              onEditClick={() => {}}
              onCommentClick={() => {}}
            />
          ))}
        </div>
      )}
    </div>
  );
}
