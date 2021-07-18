import React from "react";
import NavigationItems from "./NavigationItems";

const Navigation = () => {
  return (
    <div>
      {NavigationItems.map((items, index) => {
        return (
          <button key={index} onClick={(e) => console.log(e.target)}>
            {items.title}
          </button>
        );
      })}
    </div>
  );
};

export default Navigation;
