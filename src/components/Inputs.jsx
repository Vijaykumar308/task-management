import { useState } from "react"
import "./inputs.css"

export default function Inputs() {
    const [userInput, setUserInput] = useState('');
    const [listItem, setListItem] = useState([]);

    // taking the input from user
    const handleInput = (e) => {
       setUserInput(e.target.value);

    }
    //adding item into task bar
    const handleClick = (e) => {
        setListItem(
            [...listItem,userInput]
        )
        setUserInput('');
    }
    // delete item from task bar
    const handleDelete = (index) => {
        let updatedArr = listItem.filter((elem,id)=>{
            return index !== id;
        });
        setListItem(updatedArr);
    }

  return (
    <div className="inputs">
        <input 
            type="text"
            placeholder="add Item" 
            name="userInput"
            onChange={handleInput}
            id="userInput"
            value={userInput}
        />
        <input 
            type="button"
            value="add Item" 
            onClick={handleClick}
        />
         <div className="container list" id="list">
            
            {
                listItem.map((item,index)=> {
                   return <div className="listItems" key={index}>
                        <li>{item}</li>
                        <div className="actions">
                            <button className="deleteBtn" onClick={()=>handleDelete(index)}>X</button>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}
