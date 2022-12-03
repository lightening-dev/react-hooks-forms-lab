import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  
  const [newFood, newFoodSetter] = useState("");
  const [selectState, setSelectState] = useState("Produce")

  // function addElement(newFood) {
  //   setitems([...items, newFood]);

  // }

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: newFood,
      category: selectState,
    }
    onItemFormSubmit(newItem);
  }
  


  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name" value={newFood} onChange={(event) => newFoodSetter(event.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" 
                value={selectState} 
                onChange={(event) => setSelectState(event.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form >
  );
}

export default ItemForm;
