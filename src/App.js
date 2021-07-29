import "./App.css";
import { useState, useEffect } from "react";
import Card from "./Components/card";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import MainContent from "./MainContent";
import BeerCard from "./Components/BeerCard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Components/BeerCard/:id" component={BeerCard}>
          <BeerCard></BeerCard>
        </Route>
        <Route path="/">
          <MainContent></MainContent>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
