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

function BeerCard(props) {
  let { id } = useParams();
  const [beerData, setBeerData] = useState([]);

  useEffect(
    function () {
      fetch(`https://api.punkapi.com/v2/beers/${id}`)
        .then(function (response) {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setBeerData(data);
        });
    },
    [id]
  );

  return (
    <div>
      <h1>{beerData.id}</h1>
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
      <Router>
        <Switch>
          <Route path="/BeerCard/:id">
            <BeerCard></BeerCard>
          </Route>
          <Route to="/">
            <h1>Brewdog App</h1>
            {listBeers.map(function (beers) {
              return <Card beers={beers}></Card>;
            })}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
