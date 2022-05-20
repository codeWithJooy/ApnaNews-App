import React from 'react'

const HomePageTop=({image,heading})=>{
    return(
        <div className="hometop">
           <img src={image} className="coverPic"/>
           <div className="overlay"></div>
           <div className="hamburger">
               <img src="docs/img/hamburger.png" />
           </div>
           <div className="home_nod">
              <p>News of the day</p>
           </div>
           <div className="news_title">
              <p>{heading}</p>
           </div>
           {/* <div className="learnMore">
               <span>Learn More</span>
           </div> */}
        </div>
    )
}
export default HomePageTop;