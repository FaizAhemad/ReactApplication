import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { defaultScrollPosition } from "../constants/constants";

function Categories({ setPageNotFound }) {
  useEffect(() => {
    defaultScrollPosition();
  }, []);
  return (
    <Container style={{ margin: '120px 0px 0px 0px' }}>Categories</Container>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(null, mapDispatchToProps)(Categories);