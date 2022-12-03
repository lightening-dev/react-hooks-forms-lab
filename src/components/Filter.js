import React from "react";

function Filter({ onCategoryChange, textValue, textSetter }) {
  
  
  // I imported the props of textValue & Textsetter which are
  // defined in Shoppinglist component
  
  return (
    <div className="Filter">
      <input value= {textValue} 
              onChange={(event) => textSetter(event.target.value)}
              type="text" name="search" placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

// add state to hold value of input
// I think Item component & Filter component
// on change listener on input element
// decide which component to add state filter or shopping list

