import {useEffect} from 'react';
import {Container} from 'react-bootstrap';
import {connect} from 'react-redux';
import {defaultScrollPosition} from '../constants/constants';

function Home1({setPageNotFound, ...props}) {
  useEffect(() => {
    defaultScrollPosition();
  }, []);
  return <Container style={{margin: '120px 0px 0px 0px'}}>Home1</Container>;
}

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(null, mapDispatchToProps)(Home1);
