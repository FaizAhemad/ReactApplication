import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {connect} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {setPageNotFoundComponent} from '../../actions/general-actions';

function ErrorModal({setPageNotFound, ...props}) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              navigate('/home');
              handleClose();
            }}
          >
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    setPageNotFound: value => {
      dispatch(setPageNotFoundComponent(value));
    },
  };
};

export default connect(null, mapDispatchToProps)(ErrorModal);
