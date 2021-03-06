import "./App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Components/card";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function MainContent() {
  const [listBeers, setListBeers] = useState([]);

  useEffect(function () {
    fetch("https://api.punkapi.com/v2/beers")
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setListBeers(data);
      });
  }, []);

  return (
    <div>
      <h1>Brewdog App</h1>
      <div className="card-container">
        {listBeers.map(function (beer) {
          return <Card beer={beer}></Card>;
        })}
      </div>
    </div>
  );
}

export default MainContent;
