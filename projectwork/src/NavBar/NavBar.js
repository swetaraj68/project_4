import { Link ,useNavigate } from "react-router-dom";


import "./custom.css";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
export default function NavBar() {
  const nav =useNavigate()
  function handleRedirect(){
 nav("/bookmarkedData")
  }
  return (
    <>
      
      <div className="main">
      <div className="left">
        <div className="leftSec">
      <img width ="10%"
          src="https://i.imgur.com/yFheJyF.png"
          alt="loading"
          // className={style.tag}
        />
        <h3 
        >LA POSTE</h3></div>
        <div className="leftThird">
      <Link to="/" className="link">
        
        <p>Home</p></Link>

        <Link to="/create-post" className="link">
        <p>Create Post</p></Link>
        </div>
        </div>
        <div className="bookmarked">
          
          <BsFillBookmarkHeartFill onClick={handleRedirect}/>
         
          </div>
    </div>
  

    </>
  );
}

