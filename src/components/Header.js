import React,{useEffect, useState} from "react";
import NewsPage from "./NewsPage";
import "./Header.css";
import background from "./images/background.svg";
import Search from "./Search";
const Header =()=> {

    return(
        <div className="header">
            <div>
                <span id="outline">Trading</span> news
            </div>



            <Search/>
        
        
        </div>
    )
}
export default Header;