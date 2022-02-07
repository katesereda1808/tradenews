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
            console.log(globalState);
            setRequest(globalState.search);
                fetch(`https://newsapi.org/v2/everything?q=${request}&apiKey=812129839886483c8a91c8ae3736295a`)
                .then(resp=>{
                return resp.json();
                })
                .then(data=>{
                // console.log(data);
                setNews(data.articles);
            })
        })
    }, [])

    // console.log(news);
    return(
        <>
        <div className="newsPage__container">
            {news.map(newsItem=>(
                    <NewsItem urlToImage={newsItem.urlToImage} title={newsItem.title}/>
            ))}
        </div>
        </>
    )
}
export default NewsPage;