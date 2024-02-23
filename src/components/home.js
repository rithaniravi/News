import Banner from '../components/banner'
import axios from "axios";
import { useState, useEffect} from "react";
import image from "../image/newsa.jpg"

const Home=()=>{
    const [News,setNews]=useState([])

    useEffect(()=>{
        axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5fb6029180784c218cae228a28e16068`)
        .then((res)=>{setNews(res.data.articles)
            console.log(res.data.articles)})
        .catch((err)=>console.log(err))
        
       },[])

    return(<>
        <Banner/>
        <div className="container-fluid mt-5 p-2 mx-5">
            <div className="row">
                
           {
            News?News.map((val)=>{
                return(
                    <>
               <div className="col-sm-12 col-md-4 col-lg-3 mt-1 p-1" style={{height:"500px",width:"400px"}}>
                     <div className="card p-2 rounded bg-light text-dark border-1" style={{maxWidth:"500px"}}>
                        <img className="card-img-top my-2" style={{height:"200px"}} src={val.urlToImage?val.urlToImage:image} alt=""></img>
                     <div className="card-body">
                        <h3 className="card-author">{val.author}</h3>
                        <h4 className="card-title">{val.title.slice(0,50)}</h4>
                        <p className="card-text">{val.description?val.description.slice(0,30):"News information"}</p>
                        <a href={val.url} className="btn btn-danger rounded-3">Show More...</a>
                     </div>
                    </div>
                </div>
                    </>)})
          :null}
        </div>   
        </div>
        
        </>

        
    
    
        
    )

    

    

}
export default Home;