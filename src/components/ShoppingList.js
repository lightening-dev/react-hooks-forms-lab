import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [inputText, setInputText] = useState("");
  // i created the inputext state variable, and set its default state to an empty string
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

    const searchFilter = itemsToDisplay.filter((item) => {
      if( inputText === "") return true;

     return item.name === inputText;

     // here, I created searchfilter variable, which is an array, populated by the created array
     // itemstodisplay, by filtering it, and returning the object.name variable equal to the inputText
     // variable. which is the user input
     // using if statement saying that if the inputText variable is = to an empty string
     // return true, or all

    })

      
      function onItemFormSubmit(newFood) {
        console.log(newFood)
         
            setItems([...items, newFood]);
        
          }
 
  console.log(searchFilter);
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter textValue={inputText} textSetter={setInputText} 
      onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {searchFilter.map((item) => (
          <Item  key={item.id} name={item.name} category={item.category} />
        ))}
        
      </ul>
    </div>
  );
}
// in the Filter Component, I created the props, textValue, and TextSetter, and set them 
//equal to the the state variable input text, and the setterfunciton setinputText.
// also, in the ul, I changed the array that .map was maping over, to searchfilter, because 
// searchFilter is the same array, but with the logic program

export default ShoppingList;
