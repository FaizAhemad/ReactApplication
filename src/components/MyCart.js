import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { defaultScrollPosition } from "../constants/constants";

function MyCart() {

  useEffect(() => {
    defaultScrollPosition();
  }, []);

  return (
    <Container style={{ margin: '120px 0px 0px 0px' }}>MyCart</Container>
  )
};

export default MyCart;