import { BookmarkedData } from "../Recoil/UserSelectedData"
import { useRecoilValue } from "recoil"
import NavBar from "../NavBar/NavBar"
import "./BookMarked.css"
export default function BookMarked(){
const showBookmarked = useRecoilValue(BookmarkedData)

console.log(showBookmarked)
    return(<div className="mainbox">
    <NavBar/>
        <div className="postDetail">
        <div className="containers">
        {/* <h1 className="display-1">sweta</h1> */}
        {showBookmarked.map((showBookmarked)=><div className="showbook">
       
            <h1>{showBookmarked.title}</h1>
        <div
          className="p-4 content"

          dangerouslySetInnerHTML={{
            __html: showBookmarked.content,
          }}
        >
          </div> </div> )}
        </div>
        </div>
        </div>
    )
} 
{/*  */}
// <h1 className="display-1">