import React,{useEffect, useState} from "react";
import NewsPage from "./NewsPage";
import "./Header.css";
import background from "./images/background.svg";
import Search from "./Search";
import brokenLine from "./images/brokenline.svg";
import SignIn from "./SignIn";
import List from "./List";
import logo from "./images/logo.svg";

const Header =()=> {

    return(
        <div className="header">
            <div className="header__text">
                {/* <span id="outline">Trading</span><br/>
                 news */}
                <img className="logo" src={logo}/>

            </div>
            <img className="broken-line" src={brokenLine}/>


            <div className="header__icons">
                <Search/>
                <SignIn/>
                <List/>

            </div>
            
        
        
        </div>
    )
}
export default Header;