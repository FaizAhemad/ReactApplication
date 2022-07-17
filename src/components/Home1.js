import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { setPageNotFoundComponent } from "../actions/general-actions";
import { defaultScrollPosition } from "../constants/constants";

function Home1({ setPageNotFound, ...props }) {
  useEffect(() => {
    setPageNotFound(false);
    defaultScrollPosition();
  }, []);
  return (
    <Container style={{ margin: '120px 0px 0px 0px' }}>Home1</Container>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPageNotFound: (value) => {
      dispatch(setPageNotFoundComponent(value));
    }
  };
};

export default connect(null, mapDispatchToProps)(Home1);