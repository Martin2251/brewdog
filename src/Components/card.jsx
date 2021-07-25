import { BrowserRouter as Router, Link } from "react-router-dom";

function Card(props) {
  const id = props.id;
  return (
    <div className="cont">
      <Link to={`/BeerCard/${id}`}>
        <div>
          <h4>{props.beers.name}</h4>
          <img src={props.beers.image_url} alt="beer"></img>
        </div>
      </Link>
    </div>
  );
}

export default Card;
