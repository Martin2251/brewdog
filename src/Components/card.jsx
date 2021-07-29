import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";

function Card(props) {
  const id = props.beer.id;
  return (
    <div className="card">
      <div>
        <h4>{props.beer.name}</h4>
        <img src={props.beer.image_url} alt="beer"></img>
      </div>
      <Link to={`/BeerCard/${id}`}>
        <Button>More info</Button>
      </Link>
    </div>
  );
}

export default Card;

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;
