import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Col, Container, Row } from "reactstrap";

function App() {
  let procutInfo = {title: "Product List"}
  let categoryInfo = {title: "Category List"}
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info={categoryInfo} />
          </Col>
          <Col xs="9">
            <ProductList info={procutInfo}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
