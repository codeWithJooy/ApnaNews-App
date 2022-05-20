import React from 'react'
import ArticleTop from '../Component/ArticleTop'
import ArticleBottom from '../Component/ArticleBottom'
const ArticlePage=({news})=>{
       
        return(
            <div className="articleMain">
             <ArticleTop 
                image={news.image}
                title={news.title}/>
             
             <ArticleBottom 
                 author={news.author}
                 description={news.description}    
             />
            </div>
        )
}

export default ArticlePage;