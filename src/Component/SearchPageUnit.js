import React from 'react'
import {useHistory} from 'react-router-dom'

const SearchPageUnit=({img,title,author,description,setNews})=>{
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
        <div className="search_result_unit" data-title={title} data-des={description} data-author={author} data-image={img} onClick={getCardData}>
            <div className="search_image_section">
              <img src={img} />
            </div>
            <div className="search_title_section">
                <div class="search_result_title">
                  <p>{title}</p>
                </div>
                <div class="search_result_writer">
                  <p>{author}</p>
                </div>
            </div>
        </div>
    )
}

export default SearchPageUnit;