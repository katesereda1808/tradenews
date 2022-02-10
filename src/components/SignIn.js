import React,{useState} from "react";
import "./SignIn.css";
import store from "./redux/store";
import account from "./images/account.svg";

function SignIn(){
    
    return(
        <div className="signin">
            <img className="signin_icon" src={account}/>
           

        </div>

    )


}
export default SignIn;