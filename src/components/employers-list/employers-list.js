import EmployersListItem from "../emplyoers-list-item/employers-list-item";
import "./employers-list.css";

const EmployersLIst = ({ data,onDeleteItem, onToggleProp, onChangeInputValue}) => {
  const elements = data.map((item) => {
    const {id,...itemProps} = item
    return(
        <EmployersListItem
         onDeleteItem={() => onDeleteItem(id)} 
         onToggleProp={(e)=>onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} 
         onChangeInputValue={(e)=>onChangeInputValue(id, e.target.value)}
         key={id} {...itemProps} />
    ) 
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
};

export default EmployersLIst;
