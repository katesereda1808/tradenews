import React,{useState} from "react";
import "./Search.css";
import store from "./redux/store";
import loupe from "./images/search.svg";

function Search(){
    const[search, setSearch] = useState('');
    const searchHandler=(e)=>{
        setSearch(e.target.value);
    }
    const searchSubmitHandler=(e)=>{
        e.preventDefault();
        if(search.length>0){
            store.dispatch({
                type: 'SEARCH',
                payload: {
                    search: search
                }
            })
            setSearch('');
            console.log('submit');
        }else{
            console.log(search.length)
        }
        

    }
    return(
        <div className="search">
            <form className="search__form" onSubmit={searchSubmitHandler}>
                
                <input onChange={searchHandler} className="search__input" value={search}></input>
                <button type='submit' className="search__btn"><img src={loupe}/></button>

            </form>
        </div>

    )


}
export default Search;