import {useEffect} from 'react';
import {Container} from 'react-bootstrap';
import {connect} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {defaultScrollPosition} from '../constants/constants';
import NotLoggedIn from './NotLoggedIn';

const myCartItems = [];

// const myCartItems = [
//   {
//     id: 1,
//     name: 'Cart Item1',
//     price: 22,
//     color: 'red',
//     size: 'M',
//     category: 'Men',
//     availability:'available',
//     sameproduct:2
//   }
// ]

function MyCart({isLoggedIn, ...props}) {
  const navigate = useNavigate();
  useEffect(() => {
    defaultScrollPosition();
  }, []);
  return (
    <Container style={{margin: '120px 0px 0px 0px'}}>
      <div>
        <h4>
          <b>
            {myCartItems.length === 0
              ? `No Items in your cart Go and add something to see here`
              : 'Your Items'}
          </b>
        </h4>
      </div>
    </Container>
  );
}

const mapStateToProps = store => {
  return {
    isLoggedIn: !!store.loginReducer.user.isLoggedIn,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCart);
