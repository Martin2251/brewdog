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

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainContent></MainContent>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
