import React from "react"
import { useRecoilValue } from "recoil"
import { BookmarkedData } from "../Recoil/UserSelectedData"

export default function UserBookmarkData(){
 const bookmarkedData =useRecoilValue(BookmarkedData)
 console.log(bookmarkedData,"here i am from main page ")
    return(
        <>
        {bookmarkedData.map((e)=>
        <p>{e.title}</p>
        )}
        </>
    )
}