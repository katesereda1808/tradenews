import React,{useEffect, useState} from "react";
import NewsPage from "./NewsPage";
import "./MainPage.css";
import background from "./images/background.svg";
import Header from "./Header";
const MainPage =()=> {

    return(
        <div className="pageBackground">
        
        <div className="page_container">
        <Header/>
        <NewsPage/>
        
        </div>
        </div>
    )
}
export default MainPage;