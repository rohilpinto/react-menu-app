import React from "react";
import "./App.scss";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Data from "./Data.js";

import Card from "./components/Card";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div>
      <div className="nav-container">
        <div className="title-container">
          <h1>Our Menu</h1>
        </div>

        <div className="nav">
          <div className="btn">
            <Navigation></Navigation>
          </div>
        </div>
      </div>

      <Container maxWidth="xl">
        <Grid container direction="row" justifyContent="center" alignItems="center" className="grid-container" spacing={5}>
          {Data.map((data) => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={data.id} className="grid-item">
              <Card data={data}></Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default App;
