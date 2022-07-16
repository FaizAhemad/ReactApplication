import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { defaultScrollPosition } from "../constants/constants";

function Categories() {
    useEffect(() => {
        defaultScrollPosition();
    
    }, []);

  return (
    <Container style={{ margin: '120px 0px 0px 0px' }}>Categories</Container>
  )
};

export default Categories;