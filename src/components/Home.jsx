import Header from "./Header";
import CardPizza from "./CardPizza";
import { Container, Row, Col } from "react-bootstrap";
// ... tus otros imports

const Home = () => {
  return (
    <>
      <Header />
      <Container className="my-5">
        <Row>
          <Col md={4}>
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSco7KIGS_7OGytsL7tx5iEpxaI_CZrkv5eYA&s"
            />
          </Col>
          <Col md={4}>
            <CardPizza
              name="Española"
              price={6950}
              ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI2hdQeNVlyu20ReOpJcNwdgW0ER5hwxnauQ&s"
            />
          </Col>
          <Col md={4}>
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img="https://i.ytimg.com/vi/Th-RLtBQFU4/maxresdefault.jpg"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;

