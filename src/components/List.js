import React,{useState} from "react";
import "./List.css";
import store from "./redux/store";
import list from "./images/list.svg";

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
    
    const handleAddToList=(e)=>{
        e.preventDefault();
        console.log("add to list");
        if (getLocalStorageData==null){
            listArr=[];
            console.log(listArr)
        } else {
            listArr=storageData;
        }
        listArr.push(searchList);
        localStorage.setItem('list', JSON.stringify(listArr));
        console.log(listArr);
        setListItems(storageData);
    }
    const listHandler=(e)=>{
        setSearchList(e.target.value);
    }
    // const deleteListItem=(index)=>{
    //     storageData.splice(index,1);
    //     localStorage.setItem('list', JSON.stringify(storageData));
    //     setListItems(storageData)

    // }
    
    return(
        <div className="list">
            <img className="list_icon" src={list} onClick={handleListClick}/>
            {/* {
                clickList&& */}
                <div className="list__container">
                    <form className="list__search" onSubmit={handleAddToList}>
                        <button type="submit" >+</button>
                        <input onChange={listHandler} value={searchList}></input>
                        <ul className="list__list">
                            {getLocalStorageData&&
                   
                            listItems.map((item, index)=>(
                             
                                <li key={index}>{item}
                                {/* <button 
                                onClick={deleteListItem(index)}>
                                    -</button> */}
                                </li>
                               
                            ))}
                        </ul>


                        

                    </form>
                    
                    
                </div>
            {/* } */}

        </div>

    )


}
export default List;