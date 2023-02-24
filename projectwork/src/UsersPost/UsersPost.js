import React from "react";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { BookmarkedData, UserSelectedData } from "../Recoil/UserSelectedData";
import { Link, useNavigate } from "react-router-dom";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import style from "./UserPost.module.css";
export default function UsersPost() {

  const PostData = 
     [
      {
        "id": 1,
        "title": "10 Tips for Better Sleep",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac orci ac velit bibendum convallis. #sleep #health #tips",
        "hashtag": ["sleep", "health", "tips"]
      },
      {
        "id": 2,
        "title": "How to Start a Business",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac orci ac velit bibendum convallis. #business #entrepreneur #startup",
        "hashtag": ["business", "entrepreneur", "startup"]
      },
      {
        "id": 3,
        "title": "5 Ways to Stay Motivated",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac orci ac velit bibendum convallis. #motivation #selfimprovement #tips",
        "hashtag": ["motivation", "selfimprovement", "tips"]
      },
      {
        "id": 4,
        "title": "Healthy Breakfast Ideas",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac orci ac velit bibendum convallis. #breakfast #healthy #recipes",
        "hashtag": ["breakfast", "healthy", "recipes"]
      },
      {
        "id": 5,
        "title": "10 Must-Read Books",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac orci ac velit bibendum convallis. #books #readinglist #recommendations",
        "hashtag": ["books", "readinglist", "recommendations"]
      }
    ]
  
  
  
  const [data, setData] = useRecoilState(UserSelectedData);
  const [bookMark, setBookmark] = useRecoilState(BookmarkedData);
  const nav = useNavigate();
  const [recoiled, setRecoiled] = useState([]);
  const [userData, setUserData] = useState(PostData);
  const [postTitle, setPostTitle] = useState("");
  const [postbody, setPostBody] = useState("");
  const [postTags, setPostTags] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(()=>{
    if(userData.length==0){
      return
    }
    localStorage.setItem("users",JSON.stringify(userData))
  },[userData])
  useEffect(()=>{
    const data = localStorage.getItem("users")
    if(data){
      const users=JSON.parse(data)
      setUserData(users)
    }
  
  },[])
  async function FetchData() {
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const responseData = await response.json();
    // let newData = responseData.map((x) => {
    //   x.isBokk = false;
    //   x.hashtag = "";
    //   return x;
    // });

    
    // setUserData(newData);
    // setNewPost(newPost,...responseData)
    // localStorage.setItem("list" ,JSON.stringify(newData))
  }
  console.log(userData, "before");
  useEffect(() => {
    FetchData();
  }, []);

  function storeClickedData(e) {
    setData(e);
    nav("/selectedpost");
  }
  function bookMarkData(e) {
    e.isBokk = true;

    setUserData([...userData]);


    setBookmark([e, ...bookMark]);
    localStorage.setItem("list",JSON.stringify(userData))
  }
  function addPost() {
    const newPostData = {
      body: postbody,
      id: Math.random() * 100,
      isBokk: false,
      title: postTitle,
      hashtag: postTags,
    };

    setUserData([newPostData, ...userData]);
     
  
    setPostBody("");
    setPostTitle("");
    setPostTags("");
  }
   
  
  function captureTitle(e) {
    setPostTitle(e.target.value);
  }
  function captureBody(e) {
    setPostBody(e.target.value);
  }
  function captureTags(e) {
    setPostTags(e.target.value);
  }
  function searchPost(e) {
    setSearchValue(e.target.value);
    
  }
  const allTagsArray = (PostData.map(post =>post.hashtag))

  console.log(allTagsArray)
  const handleTagClick = (ele) => {
    setSelectedTag(ele.hashtag);
    console.log(ele,"")
  };
 function handleHastag(e){
setSearchValue(e)
 }
  return (
    <>
      <div className={style.head}>
        <div className={style.logos}>
        <img 
          src="https://imgur.com/yFheJyF.png"
          alt="loading"
          className={style.tag}
        />
        <h3 className={style.heading}>LA POSTE</h3>
        </div>
        <div>
        <input onChange={searchPost } value={searchValue} className={style.searchBox} placeholder="search here"/>
        </div>
        <div>
        <Link to="/bookmarked">
          <BsFillBookmarkHeartFill className={style.bookMark} />
        </Link></div>
      </div>
      {allTagsArray.map((e)=> { return e.map((e)=><span onClick ={()=>handleHastag(e)}>{e}</span>)})}
      {/* <h3 > {alltagss.map((ele,id)=><h3 onClick={() => handleTagClick(ele.hashtag)}>{ele.hashtag}</h3>)}</h3> */}
      <div className={style.bodyPost}>
      <input placeholder="title" onChange={captureTitle} value={postTitle}/>
      <input placeholder="body" onChange={captureBody}value={postbody} />
      <input placeholder="#tags" onChange={captureTags} value={postTags}/>
      <button onClick={addPost}>addPost</button></div>
      <div className={style.middle}>
        {userData.filter(y=>y.title.toLocaleLowerCase().includes(searchValue.toLowerCase())).map((e, id) => (
          <div className={style.titles} key={id}>
            <span onClick={() => storeClickedData(e)} className={style.spanTag}>
              {" "}
              {e.title}
            </span>
            {/* <span>{`#${e.hashtag}</span> */}
            <a href={`#${e.hashtag}`} >{`#${e.hashtag}`}</a>
            <BsFillBookmarkHeartFill
              onClick={() => bookMarkData(e)}
              className={style.icons}
              style={{ fill: e.isBokk ? "red" : "" }}
            />
          </div>
        ))}
        {/* <button></button> */}
       
      </div>
    </>
  );
}
// .filter((e)=>e.hashtag.toLowerCase().includes(searchPost.toLowerCase()))
// onClick={() => handleTagClick(id)}
//.map((post,id)=>post.hashtag)
// .filter(e=>e.title.toLowerCase().includes(searchValue.toLowerCase()))
// const data =(a,b)=>{return a+b}