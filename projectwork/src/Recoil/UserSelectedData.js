import React from "react"
import {atom } from "recoil"

export  const UserSelectedData =atom ({
    key :"UserSelectedData",
  default :{}
})

export const BookmarkedData=atom({
    key:"BookmarkedData",
    default:[]
})