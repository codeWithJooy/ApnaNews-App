import React,{useState,useEffect,useRef} from 'react'
import SearchPageUnit from '../Component/SearchPageUnit'
import Footer from '../Component/Footer'
import Slider from 'react-slick'
import axios from 'axios';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SearchPage=({setNews})=>{
    const [active,setActive]=useState('general')
    const [search,setSearch]=useState('')
    const api_1='0c2f660f908e4772ae7de85793f7170d'
    const api_2='f500a0c0b269410e8230355ef3b1bfbc'
    const [fetch_url,setUrl]=useState('general')
    const [datum,setData]=useState('')
    const [query,setQuery]=useState('')
    
    let textInput = React.createRef()


    useEffect(()=>{
        let use_url=``
        if(fetch_url=='general'){
            use_url=`https://newsapi.org/v2/top-headlines?category=${active}&apiKey=${api_2}`
        }
        else{
            use_url=`https://newsapi.org/v2/everything?q=${query}&apiKey=${api_2}`
        }
        const fetchData=async()=>{
           const result=await axios(
            use_url
           );
         
            const arr=result.data.articles     
            console.log(Array.isArray(arr))
            setData(arr)
        }
        fetchData()
    },[active,fetch_url]);

    let values=''
    if(Array.isArray(datum)){
       values=datum.map(element=>{
       return(
           <SearchPageUnit 
             
             img={element.urlToImage}
             title={element.title}
             author={element.author}
             description={element.description}
             setNews={setNews}
           />
       ) 
    })
    }
    else{
        console.log("Pta nahi")
    }
    
    
    function addActive(e){
      let clicked=e.currentTarget.id
      setActive(clicked)
      setUrl('general')
      //alert(clicked);
    };
    
    function handleSearch(e){
        setUrl('general')
        console.log(textInput.current.value);
        setQuery(textInput.current.value);
        setUrl('anything')
        setActive("")
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: .5
      };
    return(
        <div className="searchPage">
            <div class="searchHamburger">
                <img src="docs/img/hamburger_black.png" />
            </div>
            <div className="searchTitle">
                <h2>Discover</h2>
                <span>News from all over the world</span>
            </div>
            <div className="search">
                
                <input type="text" ref={textInput} placeholder="Search" />
                <img src="docs/img/search.png" onClick={handleSearch}/>
            </div>
            <div className="searchTopics">
               <Slider {...settings} >
                   <div className={active==='general'?'searchTopicsUnit active_search_topic':'searchTopicsUnit'}  id="general" onClick={addActive}>
                      <div>
                          <p>General</p>
                      </div>
                   </div>
            
                   <div className={active==='business'?'searchTopicsUnit active_search_topic':'searchTopicsUnit'}  id="business" onClick={addActive}>
                      <div>
                          <p>Business</p>
                      </div>
                   </div>
                   <div className={active==='health'?'searchTopicsUnit active_search_topic':'searchTopicsUnit'}  id="health" onClick={addActive}>
                      <div>
                          <p>Health</p>
                      </div>
                   </div>
                   <div className={active==='sports'?'searchTopicsUnit active_search_topic':'searchTopicsUnit'}  id="sports" onClick={addActive}>
                      <div>
                          <p>Sports</p>
                      </div>
                   </div>
                   <div className={active==='science'?'searchTopicsUnit active_search_topic':'searchTopicsUnit'}  id="science" onClick={addActive}>
                      <div>
                          <p>Science</p>
                      </div>
                   </div>
                   
               </Slider>
            </div>
            <div class="searchresultsection">
                <div class="search_result_section_container">
                {
                   values
                }
                </div>
            </div>
            <Footer active="search"/>
        </div>
    )
}

export default SearchPage;