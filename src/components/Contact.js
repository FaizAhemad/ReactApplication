import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { defaultScrollPosition } from "../constants/constants";

function Contact() {
  useEffect(() => {
    defaultScrollPosition();
  }, []);
  return (
    <Container style={{ margin: '120px 0px 0px 0px' }}>Contact</Container>
  )
};

export default Contact;