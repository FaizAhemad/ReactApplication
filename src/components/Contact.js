import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { setPageNotFoundComponent } from "../actions/general-actions";
import { defaultScrollPosition } from "../constants/constants";

function Contact({setPageNotFound,...props}) {
  useEffect(() => {
    setPageNotFound(false);
    defaultScrollPosition();
  }, []);
  return (
    <Container style={{ margin: '120px 0px 0px 0px' }}>Contact</Container>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPageNotFound: (value) => {
      dispatch(setPageNotFoundComponent(value));
    }
  };
};

export default connect(null,mapDispatchToProps)(Contact);