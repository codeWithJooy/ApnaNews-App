
import {useState} from 'react'
import axios from 'axios';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ArticlePage from './Pages/ArticlePage'
import SearchPage from './Pages/SearchPage'
import Splash from './Pages/Splash'
import './App.css';

function App() {
  const [news,setNews]=useState({
    title:"",
    description:"",
    author:"",
    image:""
  })
      
  return (
 
      <BrowserRouter >

        <Switch>
          <Route path="/" component={Splash} exact/> 
          <Route 
             path="/home"
             render={()=><HomePage setNews={setNews}
                                   news={news} />}
             />

          <Route path="/search" 
                 render={()=><SearchPage setNews={setNews} />}
                 />
                 
          <Route path="/article" 
                 render={()=><ArticlePage news={news}
                 />}  
          />  
       </Switch>
    
    </BrowserRouter>
     
  );
}

export default App;
