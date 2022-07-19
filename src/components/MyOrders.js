import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { defaultScrollPosition } from "../constants/constants";

function MyOrders({ setPageNotFound, ...props }) {

  useEffect(() => {
    defaultScrollPosition();
  }, []);

  return (
    <Container style={{ margin: '120px 0px 0px 0px' }}>MyOrders</Container>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
   
  };
};

export default connect(null, mapDispatchToProps)(MyOrders);