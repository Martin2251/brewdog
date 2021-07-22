import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function Card(props) {
  return (
    <div>
      <h4>{props.beers.name}</h4>
      <p>{props.beers.abv}</p>
      <p>{props.beers.boil_volume.value}</p>
      <p>{props.beers.first_brewed}</p>
      <img src={props.beers.image_url} alt="beer"></img>
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
    <div className="App">
      {listBeers.map(function (beers) {
        return <Card beers={beers}></Card>;
      })}
    </div>
  );
}

export default App;
