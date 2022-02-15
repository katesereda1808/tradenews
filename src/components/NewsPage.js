import React,{useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import "./NewsPage.css";
import store from "./redux/store";
const NewsPage =()=> {
    const [request, setRequest] = useState('stocks')
    const [news, setNews] = useState([]);
    useEffect(()=>{
        store.subscribe(()=>{
            const globalState=store.getState();
            // console.log(globalState);
            setRequest(globalState.search);
                fetch(`https://newsapi.org/v2/everything?q=${globalState.search}&apiKey=812129839886483c8a91c8ae3736295a`)
                .then(resp=>{
                    if(resp.ok){
                        return resp.json();
                    }else{
                        setNews(false);
                    }
                })
                    
                .then(data=>{
                    if(data){
                        if(data.totalResults>0){
                        console.log(data);
                        setNews(data.articles)
                        }else{
                            setNews(false)
                            console.log(news)
                        }
                        
                        



                    }
                
                })
                .catch((error)=>{
                    console.log('Error: '+ error);
                })
        })
    }, [])

    // console.log(news);
    return(
        <>
        <div className="newsPage__container">
            {news?
            <>
            {news.map(newsItem=>(
                <NewsItem urlToImage={newsItem.urlToImage} title={newsItem.title} url={newsItem.url} key={newsItem.url}/>
            ))}
            </>
            :
            <>
            <div className="not_found"> По запросу ничего не найдено</div>
            </>
            
            }

            
        </div>
        </>
    )
}
export default NewsPage;