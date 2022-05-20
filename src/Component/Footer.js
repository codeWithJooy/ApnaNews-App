import React from 'react'
import {useHistory} from 'react-router-dom'
const Footer=({active})=>{
    let history=useHistory()
    function handleHome(){
        history.push('/home')
    }
    function handleSearch(){
        history.push('/search')
    }
    return(
        <div className="footer">
            <div className={active==='home'?'footer_unit foot_act':'footer_unit'} onClick={handleHome}>
                <img src={active=='home'?'docs/img/home_dark.png':'docs/img/home.png'} />
            </div>
            <div className={active==='search'?'footer_unit foot_act':'footer_unit'} onClick={handleSearch}>
                <img src={active=='search'?'docs/img/search_dark.png':'docs/img/search_light.png'} />
            </div>
            <div className={active==='profile'?'footer_unit foot_act':'footer_unit'} >
                <img src={active=='profile'?'docs/img/user_dark.png':'docs/img/user.png'} />
            </div>
        </div>
    )
}
export default Footer