import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function NotLoggedIn({children}) {
  return (
    <div>
      <h4>
        <b>
          Sorry! You are not logged in yet. Please login to check your orders.
        </b>
      </h4>
      {children && children}
      <h6>
        If don't have an account click <Link to="/register">here</Link> to
        create an account or you can simply login from{' '}
        <Link to="/login">here</Link>.
      </h6>
    </div>
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

export default connect(mapStateToProps, null)(NotLoggedIn);
