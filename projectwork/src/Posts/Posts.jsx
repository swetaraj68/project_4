import React, { useState } from "react";
import { postsRecoilState } from "../Recoil/UserSelectedData";
import { useRecoilState, useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./Post.css";
export default function Posts() {
  const [posts, setPosts] = useRecoilState(postsRecoilState);

  const handleDelete = (i) => {
    const _posts = [...posts];
    _posts.splice(i, 1);

    setPosts(_posts);

    console.log(posts);
  };

  return (
    <div className="navDiv">
      <NavBar />
      <div className="container ">
        <div class="list-group">
          {posts.map((post, i) => (
            <p className="list">
              <div className="postDiv">
                <Link to={`/posts/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <button className="button" onClick={() => handleDelete(i)}>
                  Delete
                </button>
              </div>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
// d-flex flex-row  align-items-center justify-content-between border border-secondary w-100 p-3
