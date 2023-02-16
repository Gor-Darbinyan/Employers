import './employers-list-item.css';
import React from "react";

const EmployersListItem = (props) =>{
    
    const {name, salary, onDeleteItem, onToggleProp, onChangeInputValue, increase, rice} = props;


    let classNames = "list-group-item d-flex justify-content-between";
    if(increase){
        classNames += ' increase';
    }
    if(rice){
        classNames += ' like'
    }

    return(
        <li className={classNames}>
        <span onClick={onToggleProp} className="list-group-item-label" data-toggle="rice">{name}</span>
        <input onChange={onChangeInputValue} type="text" className="list-group-item-input" defaultValue={salary+'$'}/>
        <div className='d-flex justify-content-center align-items-center'>
            <button type="button"
                data-toggle="increase"
                className="btn-cookie btn-sm "
                onClick={onToggleProp}>
                    
                <i className="fas fa-cookie"></i>
            </button>

            <button type="button"
             onClick={onDeleteItem}
                    className="btn-trash btn-sm ">
                <i className="fas fa-trash"></i>
                
            </button>
            <i className="fas fa-star"></i>
        </div>
    </li>
    )
 
}

export default EmployersListItem;