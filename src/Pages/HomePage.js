import React,{useState,useEffect} from 'react'
import axios from 'axios'
import HomePageTop from '../Component/HomePageTop'
import {HomePageScroll} from '../Component/HomePageScroll.js';
import Footer from '../Component/Footer'
const HomePage=({setNews,news})=>{
   const [data,setData]=useState([])
   const api_1='0c2f660f908e4772ae7de85793f7170d'
   const api_2='f500a0c0b269410e8230355ef3b1bfbc'

   useEffect(() => {
      
      const fetchData=async()=>{
         const result=await axios(
            `https://newsapi.org/v2/everything?q=general&apiKey=${api_1}`
         )
         const arr=result.data.articles     
         console.log(Array.isArray(arr))
         setData(arr)
      }
      fetchData()
   }, [])
   let img=''
   let title=''

   if(data.length){
      const arr_length=data.length;
      console.log("Array Length is "+arr_length)
      const obj=Math.floor(Math.random() * arr_length)
      img=data[obj].urlToImage
      title=data[obj].title
   }
   
   
   return(
       <div className="home_main">
         <HomePageTop image={img}
                    heading={title}
          />
          <HomePageScroll   setNews={setNews}
                            news={news}
          />
          <Footer 
            active='home'
          />
       </div>
   )
}

export default HomePage;