import React from "react";
// import Grid from "@material-ui/core/Grid";

const Card = ({ data, children }) => {
  // return <Grid item>{data.title}</Grid>;

  return (
    <div className="card-container">
      <div className="image">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="info">
        <div className="info-title-container">
          <h3>{data.title}</h3>
          <h4>{data.price}</h4>
        </div>
        <div className="info-description-container">
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
