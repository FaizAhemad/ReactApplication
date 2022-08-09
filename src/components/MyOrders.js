import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { defaultScrollPosition } from '../constants/constants';
import NotLoggedIn from './NotLoggedIn';

function MyOrders({ setPageNotFound, isLoggedIn, ...props }) {
  useEffect(() => {
    defaultScrollPosition();
  }, []);
  return (
    <Container style={{ margin: '120px 0px 0px 0px' }}>
      <div>
        <h4><b>
          my orders
        </b></h4>
      </div>
    </Container>
  )
};

const mapStateToProps = (store) => {
  return {
    isLoggedIn: !!store.loginReducer.user.isLoggedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);