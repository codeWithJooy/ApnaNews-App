import React,{useState,useEffect} from 'react'
import HomeScrollUnit from './HomeScrollUnit'
import {useHistory} from 'react-router-dom'
import Slider from 'react-slick'
import axios from 'axios'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomePageScroll=({setNews,news})=>{
 let values=''
  const [data,setData]=useState([])
  const api_1='0c2f660f908e4772ae7de85793f7170d'
  const api_2='f500a0c0b269410e8230355ef3b1bfbc'
  
  let history=useHistory()
  function handleMore(){
      history.push('/search')
  }

  useEffect(() => {
    const fetchData=async()=>{
       console.log("Inside fetchData")
       const result=await axios(
          `https://newsapi.org/v2/everything?q=general&apiKey=${api_2}`
       )
      setData(result.data.articles)
    }
    fetchData()
    
 }, [])
 
   if(Array.isArray(data)){
     console.log("Its Working")
      values=Array.from(data).map(element=>{
        
          return(
           <div className="scroll_container">
             <HomeScrollUnit 
               image={element.urlToImage}
               title={element.title}
               writer={element.author}
               description={element.description}
               setNews={setNews}
               news={news}
             />
            </div>)
      
      })
   }
   else{
     console.log("Its Else")
     values="Cant Fetchs"
   }
   
   const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1
  };
   return(
       <div className="scroll_container">
           <div className="scroll_header">
               <div className="scroll_title">
                 <p>Breaking News</p>
               </div>
               <div className="scroll_more" onClick={handleMore}>
                  <p>More</p>
               </div>
           </div>
           <div className="scroll_holder">
             <Slider {...settings}> 
               {values}
             </Slider>
           </div>
       </div>
   )
 
}

export  {HomePageScroll};