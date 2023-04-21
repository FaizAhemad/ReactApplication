import {useEffect} from 'react';
import {Container} from 'react-bootstrap';
import {connect} from 'react-redux';
import {toastr} from 'react-redux-toastr';
import {useNavigate} from 'react-router-dom';
import {logout, updateUser} from '../actions/login-actions';
import {defaultScrollPosition} from '../constants/constants';

function Logout({funcLogout}) {
  const navigate = useNavigate();
  useEffect(() => {
    funcLogout();
    navigate('/login');
    toastr.success('Logout Successful', 'Now you can login with your account.');
  }, []);
}

const mapDispatchToProps = dispatch => {
  return {
    funcLogout: () => {
      dispatch(logout());
    },
  };
};

export default connect(null, mapDispatchToProps)(Logout);
