import React, { useEffect, useState } from "react";
import { postsRecoilState } from "../Recoil/UserSelectedData";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import NavBar from "../NavBar/NavBar";
import "./PostDetails.css";
export default function PostDetails() {
  const params = useParams();
  const id = params.id;
  const posts = useRecoilValue(postsRecoilState);
  const [post, setPost] = useState({});

  useEffect(() => {
    const post = posts.find((post) => {
      return post.id == id;
    });

    setPost(post);
  }, [id]);
  return (
    <div className="postDetails">
      <NavBar />
      <div className="container">
        <h1 className="display-1">{post.title}</h1>
        <hr />
        <div
          className="p-4"
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        ></div>
      </div>
    </div>
  );
}
