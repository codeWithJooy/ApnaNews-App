import React from 'react'

const ArticleBottom=({author,description})=>{
    return(
        <div className="articleBottom">
            <div className="author">
                <div class="author_container">
                    <p>{author}</p>
                </div>
            </div>
            <div className="articleDescription">
                <span>{description}</span>
            </div>
            <div class="articleLink">
                <p>Read Full Story</p>
            </div>
        </div>
    )
}


export default ArticleBottom;