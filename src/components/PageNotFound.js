import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { constants, navLinks } from '../constants/constants';
import pageNotFoundImage from '../images/page-not-found.png'
function PageNotFound() {

  useEffect(() => {
    window.scrollTo(0, 160);
  }, []);

  return (
    <div style={{ margin: "200px 0 ", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '500px' }}>
        <img style={{ width: '500px', height: '400px' }} src={pageNotFoundImage} />
        <h1 style={{ fontWeight: 'bolder' }}> {constants.PAGE_NOT_FOUND}</h1>
        <h6>{constants.PLEASE_CLICK_HERE_TO_GO_TO}<Link to={"/"}> {navLinks.HOME} </Link></h6>
      </div>
    </div>
  )
};

export default PageNotFound;