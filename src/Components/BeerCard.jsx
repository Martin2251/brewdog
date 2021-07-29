import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function BeerCard() {
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
      <h1>hi</h1>
    </div>
  );
}

export default BeerCard;
