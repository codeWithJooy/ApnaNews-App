import React from 'react'
import {useHistory} from 'react-router-dom'

const ArticleTop=({image,title})=>{
    let history=useHistory()
    const back=()=>{
       history.push('/home')
    }
    return(
        <div className="articleTop">
            <img src={image} className="articleImage"/>
            <div className="overlay"></div>
            
              <img src="docs/img/left-arrow.png" alt="Abhi" className="arrow" style={{"pointer-events": "all"}} onClick={()=>back()}/>
          
            <div className="articleTitle" >
              <p>{title}</p>
            </div>
        </div>
    )
}

export default ArticleTop;