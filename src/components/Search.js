import React,{useState} from "react";
import "./Search.css";
import store from "./redux/store";

function Search(){
    const[search, setSearch] = useState('');
    const searchHandler=(e)=>{
        setSearch(e.target.value);
    }
    const searchSubmitHandler=(e)=>{
        e.preventDefault();
        store.dispatch({
            type: 'SEARCH',
            payload: {
                search: search
            }

        })
        console.log('submit')

    }
    return(
        <div className="search">
            <form className="search__form" onSubmit={searchSubmitHandler}>
                <button type='submit' className="search__btn"/>
                <input onChange={searchHandler} className="search__input"></input>

            </form>
            


        </div>

    )


}
export default Search;