import { useEffect } from "react";
import { connect } from "react-redux";
import { defaultScrollPosition } from "../constants/constants";

function Blogs({ setPageNotFound }) {

  useEffect(() => {
    defaultScrollPosition();
  }, []);

  return (
    <div className='componentContainer'></div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPageNotFound: (value) => {
      dispatch(setPageNotFoundComponent(value));
    }
  };
};

export default connect(null, mapDispatchToProps)(Blogs);