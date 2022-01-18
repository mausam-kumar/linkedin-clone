import Feed from "./Feed/Feed"
import Navbar from "./Navbar/Navbar"
import {useSelector} from "react-redux"
import {Navigate} from "react-router-dom"

function MainPage(){

    const {isSuccess} = useSelector(state => state.reducer.auth)
    return (
        isSuccess===true?<div>
            <Navbar/>
            <Feed/>
        </div>:<Navigate to="/login"/>
    )
}

export default MainPage