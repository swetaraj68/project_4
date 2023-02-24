import React from "react"
import { Link } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { BookmarkedData } from "../Recoil/UserSelectedData"
import style from "./UsersBookmarkData.module.css"
export default function UserBookmarkData(){
 const bookmarkedData =useRecoilValue(BookmarkedData)
 console.log(bookmarkedData,"here i am from main page ")
    return(
        <div className={style.mainDiv}>
        <Link to ="/">Home</Link>
        <div className={style.main}>
        
        {bookmarkedData.map((e)=>
        <p>{e.title}</p>
        )}
        </div>

        </div>
    )
}