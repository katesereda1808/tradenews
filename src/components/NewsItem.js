import React from "react";
import "./NewsItem.css"
const NewsItem =({title,urlToImage})=> {

    return(
        <div className="newsItem">
            <img className="newsItem__img" src={urlToImage}>
            </img>
            <div className="newsItem__title">
                {title}
            </div>
        </div>
    )
}
export default NewsItem;