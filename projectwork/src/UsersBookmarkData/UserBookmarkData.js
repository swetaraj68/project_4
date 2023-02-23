import React from "react"
import { Link } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { BookmarkedData } from "../Recoil/UserSelectedData"

export default function UserBookmarkData(){
 const bookmarkedData =useRecoilValue(BookmarkedData)
 console.log(bookmarkedData,"here i am from main page ")
    return(
        <>
        <Link to ="/">Home</Link>
        {bookmarkedData.map((e)=>
        <p>{e.title}</p>
        )}
        </>
    )
}