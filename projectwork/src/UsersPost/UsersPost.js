import React from "react";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { BookmarkedData, UserSelectedData } from "../Recoil/UserSelectedData";
import { Link, useNavigate } from "react-router-dom";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import style from "./UserPost.module.css";
export default function UsersPost() {
  const [data, setData] = useRecoilState(UserSelectedData);
  const [bookMark, setBookmark] = useRecoilState(BookmarkedData);
  const nav = useNavigate();
  const [recoiled, setRecoiled] = useState([]);
  const [userData, setUserData] = useState([]);
  const[bookMarkColor,setBookmarkColor]=useState("")
  async function FetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const responseData = await response.json();
    console.log(responseData);
    
    setUserData(responseData);
  }
  useEffect(() => {
    FetchData();
  }, []);

  function storeClickedData(e) {
    setData(e);
    //   console.log(e)
    nav("/selectedpost");
  }
  console.log(data);
  function bookMarkData(e ,id) {
    // e.push(bookMark)
    // const newData = {}
    // alert("data for bookmark")
    recoiled.push(e );
    console.log(id.altKey, "i am from id")
    //
    // setBookmark([...bookMark])

    setRecoiled([...recoiled]);
    console.log(recoiled, "recoilo ata");
    setBookmark([...recoiled]);
    console.log(bookMark, "i am from bookmark");
    setBookmarkColor("red")
    console.log(bookMarkColor,"colour changed")
    //
    // nav("/bookmarked")
  }
  return (
    <>
      <div className={style.head}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNoH6rB8RKyHVlrUhyPZZptOve6efuXnWenuwyY_hi8x6P3wJK4IlI8sSu5kCKBu0BWI&usqp=CAU"
          alt="loading"
          className={style.tag}
        />
        <h3 className={style.heading}>LA POSTE</h3>

        <Link to="/bookmarked" >
          <BsFillBookmarkHeartFill className={style.bookMark}/>
        </Link>
      </div>
      <div className={style.middle}>
        {userData.map((e, id) => (
          
            <div className={style.titles} key={id}>
              <span onClick={() => storeClickedData(e)} className={style.spanTag}> {e.title}</span>
              <BsFillBookmarkHeartFill
                onClick={(id) => bookMarkData(e ,id)}
                className={style.icons} style={{fill:bookMarkColor}}
              />
            </div>
          
        ))}
        <button></button>
      </div>
    </>
  );
}
