import { Link } from "react-router-dom";

import  {useState} from "react"
import "./custom.css";

export default function NavBar() {
 const[search, setSearch]=useState("")

  function captureInput(e){
 setSearch(e.target.value)
  }
  return (
    <>
      <nav className="navbarMain ">
        <div className="container-fluid background-color: #eee ;w-50 p-3">
          <a className="navbar-brand" href="/">
            <div >
            <Link to="/" className="link">
              Home
            </Link>
            </div>
            <div>
            <Link to="/create-post" className="link">Create Post</Link>
            </div>
          </a>
          <input type="text" placeholder="Search Here" onChange={captureInput} value={search}/>
        </div>
      </nav>
    </>
  );
}
//border border-dark; navbar-expand-lg bg-info
