import React, { useState } from "react";

const Item = (props) => {

   const [isClicked, setState] = useState(false);

   const deleteItem = () => {
      props.onDelete(props.id);
   }

   const handleClick = (e) => {
      setState(!isClicked);
   }

   return (
      <div className="item">
         <input
            className="item-checkbox"
            type='checkbox'
            onClick={handleClick} 
         />
         <li
            style={isClicked ? {textDecoration: 'line-through'}: {textDecoration: 'none'}}
         >
            {props.item}
         </li>
         <button onClick={deleteItem}><i className="uil uil-trash"></i></button>
      </div>
   );
}

export default Item;