import React ,{useState} from "react"
// import {UserSelectedData} from ""
import { useRecoilValue } from "recoil"
import { UserSelectedData } from "../Recoil/UserSelectedData"
import style from "./SelectedUserPost.module.css"
export default function SelectedUserPost(){
    const usersPost=useRecoilValue(UserSelectedData)
    console.log(usersPost,"userdata")
    return(
        <>
    <div className={style.mainDiv}>{usersPost.body}</div>
        </>
    )
}
// text align:BsTextCenter,
// margin top:2rem,
// padding:1rem,
// width:50%
