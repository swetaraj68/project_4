import React from "react";
import { atom } from "recoil";

export const postsRecoilState = atom({
  key: "posts",
  default: [
    {
      content: "<h1>Hello Worldld</h1> <io><li>Helooo</li></ol>",
      title: "TEST HTML",
      id: 12232424,
      createdAt: Date.now(),
      isBookmarked : false
    },
    {
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      title: "TEST CON",
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      isBookmarked : false
    },
    {
      content: "HTML CONTENT",
      title: "TEST CON",
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      isBookmarked : false
    },
    {
      content: "HTML CONTENT",
      title: "TEST CON",
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      isBookmarked : false
    },
  ],
});

export const UserSelectedData = atom({
  key: "UserSelectedData",
  default: {},
});

export const BookmarkedData = atom({
  key: "BookmarkedData",
  default: {},
});
