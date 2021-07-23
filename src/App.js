import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function BeerCard(props) {
  let { BeerId } = useParams();

  const [beerDisplay, setBeerDisplay] = useState({});

  useEffect(function () {
    fetch("https://api.punkapi.com/v2/beers")
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setBeerDisplay(data);
      });
  }, []);
}

function Card(props) {
  return (
    <div className="cont">
      <div>
        <h4>{props.beers.name}</h4>
        <img src={props.beers.image_url} alt="beer"></img>
      </div>
    </div>
  );
}

function App() {
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
    <Router>
      <div className="App">
        {listBeers.map(function (beers) {
          return <Card beers={beers}></Card>;
        })}
      </div>
    </Router>
  );
}

export default App;
