import { Link } from 'react-router-dom'
import { constants, navLinks } from '../constants/constants';

function NoPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h1> {constants.PAGE_NOT_FOUND}</h1>
        <h6>{constants.PLEASE_CLICK_HERE_TO_GO_TO}<Link to={"/"}> {navLinks.HOME} </Link></h6>
      </div>
    </div>
  )
};

export default NoPage;