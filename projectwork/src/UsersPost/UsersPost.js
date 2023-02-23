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
        "hashtag": ["breakfast ", "healthy ", "recipes    "]
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
  const [searchValue, setSearchValue] = useState([]);
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
    // console.log(responseData, "previous");
    // let newData = responseData.map((x) => {
    //   x.isBokk = false;
    //   x.hashtag = "";
    //   return x;
    // });

    // console.log(responseData, "here is map");
    
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
    //   console.log(e)
    nav("/selectedpost");
  }
  console.log(data);
  function bookMarkData(e) {
    e.isBokk = true;
    console.log(e, "i am from id");

    setUserData([...userData]);

    // console.log(recoiled, "recoilo data");

    setBookmark([e, ...bookMark]);
    // console.log(bookMark, "i am from bookmark");
    localStorage.setItem("list",JSON.stringify(userData))
  }
 console.log(userData)
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
   
  console.log(userData, "after adding data");
  
  function captureTitle(e) {
    setPostTitle(e.target.value);
    console.log(postTitle, "here is tittle");
  }
  function captureBody(e) {
    setPostBody(e.target.value);
    console.log(postbody, "here is body");
  }
  function captureTags(e) {
    setPostTags(e.target.value);
    console.log(postTags, "here is tittle");
  }
  function searchPost(e) {
    const searchData=e.target.value
    setSearchValue(searchData);
    const filtered =userData.filter((e)=>{
      return e.hashtag.includes(searchData) || userData.hashtag.includes(searchData)
    })
  }
  // const allTags = [...new Set(PostData.flatMap(post => post.tags))];
  const alltagss =[...userData]
  console.log(alltagss,"here i have tags")
  const handleTagClick = (id) => {
    setSelectedTag(id);
  };
  return (
    <>
      <div className={style.head}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNoH6rB8RKyHVlrUhyPZZptOve6efuXnWenuwyY_hi8x6P3wJK4IlI8sSu5kCKBu0BWI&usqp=CAU"
          alt="loading"
          className={style.tag}
        />
        <h3 className={style.heading}>LA POSTE</h3>
        <input onChange={searchPost} value={searchValue} />
       
        <Link to="/bookmarked">
          <BsFillBookmarkHeartFill className={style.bookMark} />
        </Link>
      </div>
      <h3 > {alltagss.map((ele,id)=><h3 onClick={() => handleTagClick(id)}>{ele.hashtag}</h3>)}</h3>
      <input placeholder="title" onChange={captureTitle} value={postTitle}/>
      <input placeholder="body" onChange={captureBody}value={postbody} />
      <input placeholder="#tags" onChange={captureTags} value={postTags}/>
      <button onClick={addPost}>addPost</button>
      <div className={style.middle}>
        {userData.map((e, id) => (
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