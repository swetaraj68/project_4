import { Link ,useNavigate } from "react-router-dom";

import { useState } from "react";
import "./custom.css";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
export default function NavBar() {
  const nav =useNavigate()
  function handleRedirect(){
 nav("/bookmarkedData")
  }
  return (
    <>
      <nav className="navbarMain ">
        <div className="container-fluid background-color: #eee ;w-50 p-3">
          <a className="navbar-brand" href="/">
            <div>
              <Link to="/" className="link">
                Home
              </Link>
            </div>
            <div>
              <Link to="/create-post" className="link">
                Create Post
              </Link>
            </div>
          </a>

          
          <BsFillBookmarkHeartFill onClick={handleRedirect}/>
          
        </div>
      </nav>
    </>
  );
}
//border border-dark; navbar-expand-lg bg-info
//
