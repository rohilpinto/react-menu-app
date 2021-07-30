import React from "react";
import NavigationItems from "./NavigationItems";

const Navigation = ({ filteredData, setFilteredData }) => {
  const filterItems = (e) => {
    let newFilteredData = filteredData.filter((cat) => cat.catagory === e.target.textContent.toLowerCase());
    setFilteredData(newFilteredData);
  };
  console.log(filteredData);
  return (
    <div>
      {NavigationItems.map((items, index) => {
        return (
          <button key={index} onClick={filterItems}>
            {items.title}
          </button>
        );
      })}
    </div>
  );
};

export default Navigation;
