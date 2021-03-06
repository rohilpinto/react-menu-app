import React from "react";
// import NavigationItems from "./NavigationItems";
import Data from "../data";

const Navigation = ({ filteredData, setFilteredData }) => {
  const filterItems = (items) => {
    console.log(items);

    if (items === "all") {
      setFilteredData(Data);
    } else {
      let newFilter = Data.filter((obj) => obj.catagory === items);
      setFilteredData(newFilter);
    }

    // console.log(title);
    // if (title == "all") {
    //   setFilteredData(data);
    // } else {
    //   let newFilteredData = data?.filter((a) => a.catagory == title.toString());
    //   // does not change the orginal data
    //   setFilteredData(newFilteredData);
    // }
    // console.log(newFilteredData);
  };

  // const getMenuButtons = data.filter((obj) => obj.catagory);

  const fltrdNavItems = Array.from(new Set(Data.map((obj) => obj.catagory)));

  console.log(fltrdNavItems);

  return (
    <React.Fragment>
      <button onClick={() => filterItems("all")}>All</button>
      {fltrdNavItems.map((items, index) => (
        <button key={index} onClick={() => filterItems(items)}>
          {items}
        </button>
      ))}
    </React.Fragment>
  );
};

export default Navigation;
