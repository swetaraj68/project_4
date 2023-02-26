import { BookmarkedData } from "../Recoil/UserSelectedData"
import { useRecoilValue } from "recoil"
export default function BookMarked(){
const showBookmarked = useRecoilValue(BookmarkedData)
console.log(showBookmarked)
    return(
        <>
        <div className="container">
        <h1 className="display-1">{BookmarkedData.title}</h1>
        <div
          className="p-4 content"

        //   dangerouslySetInnerHTML={{
        //     __html: BookmarkedData.content,
        //   }}
        >
          </div>
        </div>
        </>
    )
} 