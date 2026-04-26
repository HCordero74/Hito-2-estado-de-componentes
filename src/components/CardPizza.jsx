import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { formatNumber } from "../utils/format";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card style={{ width: '100%' }} className="mb-4">
      <Card.Img variant="top" src={img} style={{ height: '200px', objectFit: 'cover' }}/>
      <Card.Body>
        <Card.Title className="fw-light">Pizza {name}</Card.Title>
        <hr />
      </Card.Body>
      <ListGroup className="list-group-flush text-center">
        <ListGroup.Item className="border-0">
          <p className="text-muted mb-0">🍕 Ingredientes:</p>
          <small>{ingredients.join(", ")}</small>
        </ListGroup.Item>
        <ListGroup.Item className="border-0">
          <h4 className="fw-bold">Precio: ${formatNumber(price)}</h4>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex justify-content-around">
        <Button variant="outline-dark" size="sm">Ver Más 👀</Button>
        <Button variant="dark" size="sm">Añadir 🛒</Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;