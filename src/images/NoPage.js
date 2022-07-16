import { Link } from 'react-router-dom'
import { constants, navLinks } from '../constants/constants';
import {img} from '../../public/images/header-PC1.jpg';

function NoPage() {
  return (
    <div style={{margin:"200px 0 ", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%',border:'2px solid red' }}>
      
      <div>
        <img src={img} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '500px' }}>
        <h1> {constants.PAGE_NOT_FOUND}</h1>
        <h6>{constants.PLEASE_CLICK_HERE_TO_GO_TO}<Link to={"/"}> {navLinks.HOME} </Link></h6>
      </div>
    </div>
  )
};

export default NoPage;