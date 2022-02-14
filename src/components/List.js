import React,{useEffect, useState} from "react";
import "./List.css";
import store from "./redux/store";
import list from "./images/list.svg";
import plus from "./images/plus.svg";
import dot from "./images/dot.svg";

function List(){
    const [clickList, setCliskList] = useState(false);

    const [searchList, setSearchList] = useState('');

    const [listItems, setListItems] = useState([]);

    let listArr=[];
    let getLocalStorageData = localStorage.getItem('list');
    let storageData = JSON.parse(getLocalStorageData);

    const handleListClick=()=>{
        setCliskList(true);
    }
    const hideTheList=()=>{
        console.log('blurrrr');
        setCliskList(false);
    }
    const listQuery=(e)=>{
        console.log(e.target.innerText);
        // console.log(key)
        store.dispatch({
            type: 'SEARCH',
            payload: {
                search: e.target.innerText
            }

        })
    }
    
    const handleAddToList=(e)=>{
        e.preventDefault();
        // console.log("add to list");
        if (getLocalStorageData==null){
            listArr=[];
            // console.log(listArr)
        } else {
            listArr=storageData;
        }
        // тут нужно добавить не только item, но и его пропсы(id)
        listArr.push(searchList);
        localStorage.setItem('list', JSON.stringify(listArr));
        // console.log(listArr);
        setListItems(storageData);
        setSearchList('');
    }
    const listHandler=(e)=>{
        setSearchList(e.target.value);
    }
    const deleteListItem=(item)=>{
        // в storageData объекты записываются без id
        // let updatedStorage = storageData.map((i)=>console.log(i))


        let updatedStorage = storageData.filter((i)=>i!==item)
        // item undefined
        console.log(updatedStorage);
        localStorage.setItem('list', JSON.stringify(updatedStorage));
        setListItems(updatedStorage);
    }
    useEffect(()=>{
        setListItems(storageData);
    }, [])
    
    return(
        <div className="list">
            <img className="list_icon icon" src={list} onClick={handleListClick}/>
            {
                clickList&&
                <div className="list__container" 
                // onBlur={hideTheList}
                >
                    <form className="list__search" onSubmit={handleAddToList}>
                        <div className="list__search_header">
                            <button type="submit" ><img className="plus" src={plus}/></button>
                            <input onChange={listHandler} value={searchList}></input>
                        </div>
                        <ul className="list__list">
                            {getLocalStorageData&&
                   
                            listItems.map((item, index)=>(

                                <li key={index} id={Math.random()*1000}className="list__row">
                                    <div className="dot-container">
                                        <img className="dot" src={dot}/>
                                    </div>
                                    

                                    <div className="row-content" onClick={listQuery}>
                                        {item}
                                    </div>
                                    <button className="list__delete-btn"
                                    onClick={()=>{deleteListItem(item)}}>
                                    -</button> 
                                </li>
                               
                            ))}
                        </ul>


                        

                    </form>
                    
                    
                </div>
            } 

        </div>

    )


}
export default List;