import React, { useState } from "react";
import { postsRecoilState, BookmarkedData } from "../Recoil/UserSelectedData";
import { useRecoilState, useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import "./Post.css";

export default function Posts() {
  const [posts, setPosts] = useRecoilState(postsRecoilState);
  const [bookMarkedData, setBookMarkedData] = useRecoilState(BookmarkedData);

  const handleDelete = (i) => {
    const _posts = [...posts];
    _posts.splice(i, 1);

    setPosts(_posts);

    console.log(posts);
  };
  function captureBookmarked(post, i) {
    const _posts = [...posts];
    if (!post.isBookmarked) {
      const bookMarkedPost = {
        content: post.content,
        title: post.title,
        id: post.id,
        createdAt: post.createdAt,
        isBookmarked: true,
      };
      _posts.splice(i, 1, bookMarkedPost);
      setPosts(_posts);

      setBookMarkedData([post, ...bookMarkedData]);
    } else if (post.isBookmarked) {
      const bookMarkedPost = {
        content: post.content,
        title: post.title,
        id: post.id,
        createdAt: post.createdAt,
        isBookmarked: false,
      };
      _posts.splice(i, 1, bookMarkedPost);
      setPosts(_posts);
    }
  }
  console.log(posts, "after");
  console.log(bookMarkedData, "sweta");
  const [search, setSearch] = useState("");

  function captureInput(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="navDiv">
      <NavBar />
      <input
        className="searchBar"
        type="text"
        placeholder="Search Here"
        onChange={captureInput}
        value={search}
      />
      <div className="mainContainers ">
        <div class="list-group">
          {posts
            .filter((post) =>
              post.title.toLowerCase().includes(search.toLocaleLowerCase())
            )
            .map((post, i) => (
              <p className="list">
                <div className="postDiv">
                  <Link to={`/posts/${post.id}`}>
                    <h1>{post.title}</h1>
                  </Link>
                  <div className="midlleLeft">
                    <BsFillBookmarkHeartFill
                      className="bookmarkeds"
                      onClick={() => captureBookmarked(post, i)}
                      style={{ fill: post.isBookmarked ? "red" : "" }}
                    />

                    <button className="button" onClick={() => handleDelete(i)}>
                      Delete
                    </button>
                  </div>
                </div>
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}

