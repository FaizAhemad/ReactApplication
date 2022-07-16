import { Fragment, useEffect, useState } from 'react';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { changeProductView } from '../actions/products-action';
import { hideSidebar, showSidebar } from '../actions/sidebar-actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faChevronRight, faUserCircle, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { title, defaultBrandName, constants, navLinks } from '../constants/constants';

function Header({ brandName, isLoggedIn, isAdmin, currentUser, isSidebarVisible, setShowSidebar, setHideSidebar, ...props }) {
    let [searchQuery, setSearchuery] = useState();
    let [expanded, setExpanded] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const currentView = props.productView.productsReducer.productView;

    const goToHome = () => {
        if (pathname === '/home' || pathname === '/') {
            return;
        }
        else {
            navigate('/home');
        }
    };

    const closeNav = () => {
        setExpanded(false);
    };

    const expandNav = () => {
        setExpanded(!expanded);
    };

    return (
        <Fragment>
            <Navbar className='headerNavbar' bg="dark" variant="dark" expand="lg" fixed="top" onToggle={expandNav} expanded={expanded}>
                <Container fluid>
                    <Navbar.Brand ><Link className='brand' to="/">{brandName}</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" onClick={expandNav} />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto" >
                            <NavLink onClick={closeNav} className='nav-link' activeclassname="is-active" to="/home">{navLinks.HOME}</NavLink>
                            <NavLink onClick={closeNav} className='nav-link' activeclassname="is-active" to="/newarrivals">{navLinks.NEW_ARRIVALS}</NavLink>
                            <NavLink onClick={closeNav} className='nav-link' activeclassname="is-active" to="/products">{navLinks.ALL_PRODUCTS}</NavLink>
                            <NavLink onClick={closeNav} className='nav-link' activeclassname="is-active" to="/categories">{navLinks.CATEGORIES}</NavLink>
                        </Nav>
                        <Nav className="me-auto" >
                            <Form className="d-flex" style={{ padding: '0', boxShadow: 'none' }}>
                                <Form.Control
                                    type="search"
                                    placeholder={constants.SEARCH}
                                    aria-label="Search"
                                    value={searchQuery}
                                    onChange={e => setSearchuery(e.target.value)}
                                />
                            </Form>
                        </Nav>
                        <Nav className="justify-content-end" >
                            {/* <NavLink onClick={closeNav} className='nav-link' activeclassname="is-active" to="/login">Login</NavLink>
                                <NavLink onClick={closeNav} className='nav-link' activeclassname="is-active" to="/register">Register</NavLink> */}
                            <NavLink to={'/myCart'}><FontAwesomeIcon icon={faCartShopping} /></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ background: 'white', width: '100%', height: '60px', position: 'fixed', zIndex: 1, top: '60px', display: 'flex', alignItems: 'center', padding: '0 10px', justifyContent: 'space-between' }}>
                <Nav>
                    {/* <button onClick={() => setShowSidebar()} className='nav-link buttonAsLink'>Go to Home &#127968;</button> */}
                    <button onClick={() => setShowSidebar()} className='nav-link buttonAsLink'>{constants.OPEN}<FontAwesomeIcon icon={faChevronRight} /></button>
                </Nav>
                <div>
                    <b>{constants.CHANGE_PRODUCT_VIEW_STYLE}</b><span onClick={() => props.changeProductViewDispatch('row')} style={{ cursor: 'pointer', color: currentView === 'row' ? 'blue' : '', fontWeight: currentView === 'row' ? 'bold' : 'normal' }}>{constants.GRIDVIEW}</span> &nbsp;&nbsp;  <span onClick={() => props.changeProductViewDispatch('column')} style={{ cursor: 'pointer', color: currentView === 'column' ? 'blue' : '', fontWeight: currentView === 'column' ? 'bold' : 'normal' }}>{constants.LISTVIEW}</span>
                </div>
            </div>

            {
                <div style={{ background: 'white', width: '100%', height: '60px', position: 'fixed', zIndex: isSidebarVisible ? 10 : 0, visibility: !isSidebarVisible && 'hidden', top: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: isSidebarVisible ? '0px' : '-250px', transition: 'all .6s' }}>
                    <Nav>
                        <button onClick={setShowSidebar} className='nav-link buttonAsLink'>Show SideBar</button>
                    </Nav>

                    <div style={{ position: 'fixed', display: 'flex', alignItems: 'flex-start', backgroundColor: isSidebarVisible ? 'rgba(0, 0, 0, .6)' : 'rgba(0, 0, 0, 0)', width: '100%', height: '100%', top: '60px' }}>
                        <div style={{ height: '100%' }}>
                            <div style={{ height: '100%', width: '250px', border: '2px solid red', background: '#4EA3AB', overflowY: 'auto', paddingBottom: '200px' }}>
                                <li className='fixedLiBgColor'>
                                    <FontAwesomeIcon icon={faUserCircle} />
                                    <Link to={'/login'} onClick={() => {
                                        setHideSidebar()
                                    }}> <h3 style={{ display: 'flex', justifyContent: 'flex-start' }}>Hello{isLoggedIn ? <>&nbsp;</> : ', Sign in'}{isLoggedIn && <span style={{ width: '60%', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', display: 'inline-block' }} title={currentUser}>{currentUser}</span>}</h3></Link></li>
                                <div style={{ height: '130px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src='chrome://branding/content/about-logo.png' alt='' style={{ height: '70px', width: '70px' }} />
                                </div>
                                <div style={{ overflowY: 'auto', height: '900px' }}>
                                    <NavLink className='sidebar-link' activeclassname="is-active" to={'/home'}>Home</NavLink>
                                    <NavLink className='sidebar-link' activeclassname="is-active" to={'/new'}>Home</NavLink>
                                    <NavLink className='sidebar-link' activeclassname="is-active" to={'/new1'}>Home</NavLink>
                                    <NavLink className='sidebar-link' activeclassname="is-active" to={'/new2'}>Home</NavLink>
                                    <NavLink className='sidebar-link' activeclassname="is-active" to={'/new4'}>Home</NavLink>
                                    <NavLink className='sidebar-link' activeclassname="is-active" to={'/new5'}>Home</NavLink>
                                    <NavLink className='sidebar-link' activeclassname="is-active" to={'/new6'}>Home</NavLink>
                                    <NavLink className='sidebar-link' activeclassname="is-active" to={'/new7'}>Home</NavLink>
                                    <NavLink className='sidebar-link' activeclassname="is-active" to={'/new8'}>Home</NavLink>
                                    <NavLink className='sidebar-link' activeclassname="is-active" to={'/new9'}>Home</NavLink>

                                </div>
                                <div style={{ height: '100%' }}>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setHideSidebar()} className='nav-link buttonAsLink'><FontAwesomeIcon title={title.CLOSE} style={{ color: 'lightgrey', padding: '4px 8px 8px 8px', fontSize: '28px' }} icon={faXmark} /></button>
                    </div>
                </div>
            }
        </Fragment>
    )
};

Header.defaultProps = {
    brandName: defaultBrandName.name,
    currentUser: 'faiz Ahemad'
};

Header.propTypes = {
    brandName: PropTypes.string
};

const mapStateToProps = (store) => {
    return {
        productView: store,
        isAdmin: store.loginReducer.isAdmin,
        isLoggedIn: store.loginReducer.isLoggedIn,
        isSidebarVisible: store.sidebarReducer.isSideBarVisible
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeProductViewDispatch: (view) => {
            dispatch(changeProductView(view));
        },
        setShowSidebar: () => {
            dispatch(showSidebar());
        },
        setHideSidebar: () => {
            dispatch(hideSidebar());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);