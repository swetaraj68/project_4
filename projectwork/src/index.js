import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import SelectedUserPost from "./SelectedUserPost/SelectedUserPost";
// import UserBookmarkData from "./UsersBookmarkData/UserBookmarkData";
import CreatePost from "./CreatePost/CreatePost";
import Posts from "./Posts/Posts";
import PostsDetails from "./Posts/PostDetails";
import BookMarked from "./Posts/BookMarked";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <ul>
      <Link to="/create-post">Create Post</Link>
      <Link to="/posts">Posts</Link>
    </ul> */}
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/selectedpost" element={<SelectedUserPost />} /> */}
        {/* <Route path="/bookmarked" element={<UserBookmarkData />} /> */}
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostsDetails />} />
        <Route path="/bookmarkedData" element={<BookMarked/>}/>
      </Routes>
    </RecoilRoot>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
