import React, { useState } from "react";

function InputField(props) {

   const [newItem, setNewItem] = useState('');
   const [valueLength, setValueLength] = useState(0);
   const valueLimit = 30;

   const handleChange = (event) => {
      const newValue = event.target.value;
      setValueLength(newValue.length);
      if(newValue.length <= valueLimit)
         setNewItem(newValue);
      else setValueLength(30)
   }

   const submitItem = (event) => {
      props.onAdd(newItem);
      setNewItem('');
      setValueLength(0);
   }

   return (
      <div className="input-bar">
         <input
            className="input-field"
            type="text"
            onChange={handleChange}
            value={newItem}
            placeholder="New Item"
         />
         <button className="add-btn" onClick={submitItem}>
            <i className="uil uil-plus"></i>
         </button>
         <span className="counter">{valueLength} / {valueLimit}</span>
      </div>
   )
}

export default InputField;