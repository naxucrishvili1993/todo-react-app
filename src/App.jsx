import React, { useState } from "react";
import Item from "./Item";
import './App.css'
import InputField from "./InputField";

const App = () => {

   const [items, setItems] = useState([
      'First Item', 'Second Item'
   ]);

   const pushItem = (newItem) => {
      if(newItem !== '') {
         setItems(previousItems => {
            return [...previousItems, newItem]
         });
      }
   }
   
   const deleteItem = (id) => {
      setItems(prevItems => {
         return prevItems.filter((item, index) => {
            return index !== id;
         });
      })
   }

   return (
      <div>
         <h1>ToDo List</h1>
         <InputField
            onAdd={pushItem}
         />
         {items.map((el, index) => 
            <Item
               item={el}
               key={index}
               id={index}
               onDelete={deleteItem}
            />)
         }
      </div>
   );
}


export default App;