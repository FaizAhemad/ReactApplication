import {useEffect} from 'react';
import {connect} from 'react-redux';
import {defaultScrollPosition} from '../constants/constants';
import {setPageNotFoundComponent} from '../actions/general-actions';

function Blogs({setPageNotFound}) {
  useEffect(() => {
    defaultScrollPosition();
  }, []);

  return <div className="componentContainer" />;
}

const mapDispatchToProps = dispatch => {
  return {
    setPageNotFound: value => {
      dispatch(setPageNotFoundComponent(value));
    },
  };
};

export default connect(null, mapDispatchToProps)(Blogs);
