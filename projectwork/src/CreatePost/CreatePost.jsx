import React from "react";

import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";
import { postsRecoilState } from "../Recoil/UserSelectedData";
import { useRecoilState } from "recoil";
import NavBar from "../NavBar/NavBar";
import "./CreatePost.css";
export default function CreatePost() {
  const [html, setHtml] = useState("");
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useRecoilState(postsRecoilState);
  const handleOnTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleOnHTMLChange = (html) => {
    setHtml(html);
  };
  const createPost = () => {
    setPosts([
      ...posts,
      {
        content: html,
        title,
        id: crypto.randomUUID(),
        createdAt: Date.now(),
      },
    ]);

    setTitle("");
    setHtml("");
    alert("Post Created!");
  };
  return (
    <div className="createPage">
      <NavBar />
      <div className="container ">
        <h1>Create Post Here</h1>
        <hr />
        <br />
        <br />
        <div className="mb-3  text-danger">
          <label for="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={handleOnTitleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Post Content
          </label>
          <RichTextEditor value={html} onChange={handleOnHTMLChange} id="rte" />
        </div>
        <div className="mb-3">
          <button class="btn btn-success" onClick={createPost}>
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
}
