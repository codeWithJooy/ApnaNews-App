import React from 'react'
import {useHistory} from 'react-router-dom'
const HomeScrollUnit=({image,title,time,writer,description,setNews,news})=>{
    
    let history=useHistory()
    function getCardData(e){
       let description= e.currentTarget.getAttribute("data-des");
       let title=e.currentTarget.getAttribute("data-title")
       let newImage=e.currentTarget.getAttribute("data-image")
       let author=e.currentTarget.getAttribute("data-author")
       setNews(prevState => ({
           ...prevState,
           title,
           description,
           author,
           image:newImage
       }))
       history.push('/article')
    }
    return(
       <div className="home_scroll_unit" data-title={title} data-des={description} data-author={writer} data-image={image} onClick={getCardData}>
          <div class="scroll_img">
              <img src={image} />
          </div>
          <div class="scroll_unit_title">
              <p>{title}</p>
          </div>
          <div class="scroll_writer">
              <p>By {writer}</p>
          </div>
       </div>
   )
}

export default HomeScrollUnit;