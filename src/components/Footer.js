import { Navbar, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { constants } from '../constants/constants';

function Footer() {
    const {DEVELOPED_BY} = constants;
    return (
        <Navbar className='footer mainFooter' bg="dark" variant="dark" style={{ zIndex: 1 }}>
            <Navbar.Text style={{ padding: "2px" }}>
                {DEVELOPED_BY}<a href="#login">fshaikh@lockstep.io</a>
            </Navbar.Text>
        </Navbar>
    )
};

const mapStateToProps = (store) => {
    return {
        isSidebarVisible: store.sidebarReducer.isSideBarVisible
    }
};

export default connect(mapStateToProps)(Footer);