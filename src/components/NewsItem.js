import React from "react";
import "./NewsItem.css"
const NewsItem =({title,urlToImage, url})=> {

    return(
        <div className="newsItem">
            <a href={url}>
            <img className="newsItem__img" src={urlToImage}>
            </img>
            <div className="newsItem__title">
                {title}
            </div>
            </a>
        </div>
    )
}
export default NewsItem;