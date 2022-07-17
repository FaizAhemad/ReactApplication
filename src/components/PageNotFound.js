import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { setPageNotFoundComponent } from '../actions/general-actions';
import { constants, navLinks } from '../constants/constants';
import pageNotFoundImage from '../images/page-not-found.png'
function PageNotFound({ setPageNotFound, ...props }) {
  useEffect(() => {
    setPageNotFound(true);
    window.scrollTo(0, 160);
  }, []);

  return (
    <div style={{ margin: "200px 0 ", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '500px' }}>
        <img style={{ width: '500px', height: '400px' }} src={pageNotFoundImage} />
        <h1 style={{ fontWeight: 'bolder' }}> {constants.PAGE_NOT_FOUND}</h1>
        <h6>{constants.PLEASE_CLICK_HERE_TO_GO_TO}<Link to={"/home"}> {navLinks.HOME} </Link></h6>
      </div>
    </div>
  )
};

const mapStateToProps = (store) => {
  return {
    isPageNotFoundPage: store.generalReducer.isPageNotFoundComponent
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPageNotFound: (value) => {
      dispatch(setPageNotFoundComponent(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageNotFound);