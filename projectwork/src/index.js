import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RecoilRoot} from "recoil"
import {BrowserRouter , Routes,Route} from "react-router-dom"
import SelectedUserPost from './SelectedUserPost/SelectedUserPost';
import UserBookmarkData from './UsersBookmarkData/UserBookmarkData';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <RecoilRoot>
  <Routes>
     <Route path ="/" element={<App />}/>
     <Route path ="/selectedpost" element={<SelectedUserPost />}/>
     <Route path ="/bookmarked" element={<UserBookmarkData />}/>
    </Routes>
  </RecoilRoot>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
