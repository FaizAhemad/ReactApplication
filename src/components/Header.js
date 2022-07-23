import { Fragment, useEffect, useRef, useState } from 'react';
import { Navbar, Container, Nav, Form, NavDropdown } from 'react-bootstrap';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { changeProductView } from '../actions/products-action';
import { hideSidebar, showSidebar } from '../actions/sidebar-actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faChevronRight, faUserCircle, faCartShopping, faChevronDown, faChevronUp, faChevronCircleUp, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { title, defaultBrandName, constants, navLinks, goToHome, defaultScrollPosition } from '../constants/constants';
function Header({ brandName, isLoggedIn, isAdmin, currentUser, isSidebarVisible, setShowSidebar, setHideSidebar, isLoginPage, isPageNotFoundPage, screen, ...props }) {
    let [searchQuery, setSearchquery] = useState('');
    let [expanded, setExpanded] = useState(false);
    let [isSearchBoxFocused, setSearchBoxFocus] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const currentView = props.store.productsReducer.productView;
    const totalItemsInMyCart = 0;
    const closeNav = () => setExpanded(false);
    const expandNav = () => setExpanded(!expanded);
    const navlinkRef = useRef();
    const [mouseEnteredOnDropdown, setMouseEnteredOnDropdown] = useState(false);

    return (
        <Fragment>
            <Navbar className='headerNavbar' bg="dark" variant="dark" expand="lg" fixed="top" onToggle={expandNav} expanded={expanded}>
                <Container fluid>
                    <Navbar.Brand ><Link className='brand' to="/home" onClick={() => goToHome(pathname, navigate)}>{brandName}</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" onClick={expandNav} />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto" >
                            <NavLink onClick={closeNav} className='nav-link' activeclassname="is-active" to="/home">{navLinks.HOME}</NavLink>
                            <NavLink onClick={closeNav} className='nav-link' activeclassname="is-active" to="/newarrivals">{navLinks.NEW_ARRIVALS}</NavLink>
                            <NavLink onClick={closeNav} className='nav-link' activeclassname="is-active" to="/products">{navLinks.ALL_PRODUCTS}</NavLink>
                            {
                                (screen.width > 991) &&
                                <NavDropdown onMouseEnter={() => setMouseEnteredOnDropdown(true)} onMouseLeave={() => setMouseEnteredOnDropdown(false)} title={<><span>Categories</span> <FontAwesomeIcon style={{ fontSize: '14px' }} icon={mouseEnteredOnDropdown ? faChevronUp : faChevronDown} /></>} id="collasible-nav-dropdown" show={mouseEnteredOnDropdown}>
                                    <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', overflowY: 'auto' }}>
                                        <div className='' >
                                            <NavDropdown.Item className='heading'><h4><b>MENS</b></h4></NavDropdown.Item>
                                            <NavDropdown.Item >Action</NavDropdown.Item>
                                            <NavDropdown.Item >Action</NavDropdown.Item>
                                            <NavDropdown.Item >Action</NavDropdown.Item>
                                            <NavDropdown.Item >Action</NavDropdown.Item>
                                            <NavDropdown.Item >Action</NavDropdown.Item>
                                            <NavDropdown.Item >Action</NavDropdown.Item>
                                            <NavDropdown.Item >Action</NavDropdown.Item>
                                            <NavDropdown.Item >Action</NavDropdown.Item>
                                            <NavDropdown.Item >Action</NavDropdown.Item>
                                            <NavDropdown.Item >
                                                Another action
                                            </NavDropdown.Item>
                                            <NavDropdown.Item >Something</NavDropdown.Item>
                                        </div>
                                        <div className='' >
                                            <NavDropdown.Item className='heading'><h4><b>MENS</b></h4></NavDropdown.Item>
                                            <NavDropdown.Item >Action</NavDropdown.Item>
                                            <NavDropdown.Item >
                                                Another action
                                            </NavDropdown.Item>
                                            <NavDropdown.Item >Something</NavDropdown.Item>
                                        </div>
                                        <div className='' >
                                            <NavDropdown.Item className='heading'><h4><b>MENS</b></h4></NavDropdown.Item>
                                            <NavDropdown.Item >Action</NavDropdown.Item>
                                            <NavDropdown.Item >
                                                Another action
                                            </NavDropdown.Item>
                                            <NavDropdown.Item >Something</NavDropdown.Item>
                                        </div>
                                        <div className='' >
                                            <NavDropdown.Item className='heading'><h4><b>MENS</b></h4></NavDropdown.Item>
                                            <NavDropdown.Item >Action</NavDropdown.Item>
                                            <NavDropdown.Item >
                                                Another action
                                            </NavDropdown.Item>
                                            <NavDropdown.Item >Something</NavDropdown.Item>
                                        </div>
                                        <div className='' >
                                            <NavDropdown.Item className='heading'><h4><b>MENS</b></h4></NavDropdown.Item>
                                            <NavDropdown.Item >Action</NavDropdown.Item>
                                            <NavDropdown.Item >
                                                Another action
                                            </NavDropdown.Item>
                                            <NavDropdown.Item >Something</NavDropdown.Item>
                                        </div>
                                    </div>
                                </NavDropdown>
                            }
                        </Nav>
                        <Nav className="me-auto" >
                            <Form className="d-flex" style={{ padding: '0', boxShadow: 'none', position: 'relative' }}>
                                <Form.Control
                                    id='header-search-box'
                                    type="search"
                                    placeholder={constants.SEARCH}
                                    aria-label="Search"
                                    value={searchQuery}
                                    onChange={e => setSearchquery(e.target.value)}
                                    style={{ borderRadius: '0px' }}
                                    onFocus={() => setSearchBoxFocus(true)}
                                    onBlur={() => setSearchBoxFocus(false)}
                                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                />
                                <div className='header-search-box-close-btn' style={{ color: '#03A9F4', position: 'absolute', right: '0', top: '0', padding: '10px 10px 15px 10px' }}><FontAwesomeIcon style={{ visibility: searchQuery ? 'visible' : 'hidden', cursor: 'pointer' }} icon={faXmark} onClick={() => setSearchquery('')} /></div>
                            </Form>
                        </Nav>
                        <Nav className="justify-content-end" >
                            <NavLink
                                onClick={closeNav}
                                to="/myorders"
                                className='nav-link header-right-nav'
                            >
                                {navLinks.RETURNS_AND_ORDERS}
                            </NavLink>
                            {/* <NavLink onClick={closeNav} className='nav-link' activeclassname="is-active" to="/login">Login</NavLink>
                                <NavLink onClick={closeNav} className='nav-link' activeclassname="is-active" to="/register">Register</NavLink> */}
                            <NavLink
                                to={'/myCart'}
                                ref={navlinkRef}
                                style={{ position: 'relative', padding: '14px 15px', boxSizing: 'border-box' }}
                            >
                                <span id='totalItemsInMyCart' style={{ display: 'flex', width: totalItemsInMyCart < 10 ? '20px' : '22px', fontSize: totalItemsInMyCart > 99 ? '9px' : '10px', color: 'white', fontWeight: 'bold', height: totalItemsInMyCart < 10 ? '20px' : '22px', borderRadius: '50%', top: '2px', right: '10px', border: '1px solid red', position: 'absolute', background: 'red', justifyContent: 'center', alignItems: 'center' }}>
                                    {totalItemsInMyCart > 99 ? 99 + '+' : totalItemsInMyCart < 0 ? 0 : totalItemsInMyCart}
                                </span>
                                <FontAwesomeIcon
                                    title={constants.MY_CART}
                                    style={{
                                        fontSize: '28px',
                                        color: pathname === '/myCart' ? '#03A9F4' : 'gainsboro'
                                    }} icon={faCartShopping}
                                />
                            </NavLink>
                            {
                                isLoggedIn &&
                                <NavLink onClick={closeNav} className='nav-link' activeclassname="is-active" to="/logout">Logout</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ background: 'white', width: '100%', height: '60px', position: 'fixed', zIndex: 1, top: '54px', display: 'flex', alignItems: 'center', padding: '0 10px', justifyContent: 'space-between' }}>
                <Nav>
                    {/* <button onClick={() => setShowSidebar()} className='nav-link buttonAsLink'>Go to Home &#127968;</button> */}
                    <button onClick={() => setShowSidebar()} className='nav-link buttonAsLink'>{constants.OPEN}<FontAwesomeIcon icon={faChevronRight} />{isSearchBoxFocused}</button>
                </Nav>
                <div id='gridListViewButton'>
                    <b>{constants.CHANGE_PRODUCT_VIEW_STYLE}</b><span onClick={() => props.changeProductViewDispatch('row')} style={{ cursor: 'pointer', color: currentView === 'row' ? 'blue' : '', fontWeight: currentView === 'row' ? 'bold' : 'normal' }}>{constants.GRIDVIEW}</span> &nbsp;&nbsp;  <span onClick={() => props.changeProductViewDispatch('column')} style={{ cursor: 'pointer', color: currentView === 'column' ? 'blue' : '', fontWeight: currentView === 'column' ? 'bold' : 'normal' }}>{constants.LISTVIEW}</span>
                </div>
            </div>
            {
                <div style={{ background: 'white', width: '100%', height: '60px', position: 'fixed', zIndex: isSidebarVisible ? 10 : 0, visibility: !isSidebarVisible && 'hidden', top: '54px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: isSidebarVisible ? '0px' : '-310px', transition: 'all .6s' }}>
                    <Nav>
                        <button onClick={setShowSidebar} className='nav-link buttonAsLink'>Show SideBar</button>
                    </Nav>
                    <div style={{ position: 'fixed', display: 'flex', alignItems: 'flex-start', backgroundColor: isSidebarVisible ? 'rgba(0, 0, 0, .6)' : 'rgba(0, 0, 0, 0)', width: '100%', height: '100%', top: '54px' }}>
                        <div style={{ height: '100%' }}>
                            <div style={{ height: '100%', width: '300px', border: '2px solid red', background: '#4EA3AB', overflowY: 'auto', paddingBottom: '200px' }}>
                                <li className='fixedLiBgColor'>
                                    <FontAwesomeIcon icon={faUserCircle} />
                                    <Link to={isLoggedIn ? '/home' : '/login'} onClick={() => {
                                        setHideSidebar();
                                        isPageNotFoundPage ? defaultScrollPosition(0, 160) : isLoginPage ? defaultScrollPosition(0, 80) : defaultScrollPosition()
                                    }}>
                                        <h3 style={{ display: 'flex', justifyContent: 'flex-start' }}>Hello{isLoggedIn ? <>&nbsp;</> : ', Sign in'}{isLoggedIn && <span style={{ width: '60%', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', display: 'inline-block' }} title={"Faiz Ahemad Shaikh"}>{"Faiz Ahemad Shaikh"}</span>}</h3></Link></li>
                                <div style={{ height: '130px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src='chrome://branding/content/about-logo.png' alt='' style={{ height: '70px', width: '70px' }} />
                                </div>
                                <div style={{ overflowY: 'auto', height: '900px' }}>
                                    <NavLink className='sidebar-link' activeclassname="is-active" onClick={() => setHideSidebar()} to={'/home'}>Home</NavLink>
                                    <NavLink className='sidebar-link' activeclassname="is-active" onClick={() => setHideSidebar()} to={'/new'}>Home</NavLink>
                                    <NavLink className='sidebar-link' activeclassname="is-active" onClick={() => setHideSidebar()} to={'/new1'}>Home</NavLink>
                                    <NavLink className='sidebar-link' activeclassname="is-active" onClick={() => setHideSidebar()} to={'/new2'}>Home</NavLink>
                                    <NavLink className='sidebar-link' activeclassname="is-active" onClick={() => setHideSidebar()} to={'/new4'}>Home</NavLink>
                                    <NavLink className='sidebar-link' activeclassname="is-active" onClick={() => setHideSidebar()} to={'/new5'}>Home</NavLink>
                                    <NavLink className='sidebar-link' activeclassname="is-active" onClick={() => setHideSidebar()} to={'/new6'}>Home</NavLink>
                                    <NavLink className='sidebar-link' activeclassname="is-active" onClick={() => setHideSidebar()} to={'/new7'}>Home</NavLink>
                                    <NavLink className='sidebar-link' activeclassname="is-active" onClick={() => setHideSidebar()} to={'/new8'}>Home</NavLink>
                                    <NavLink className='sidebar-link' activeclassname="is-active" onClick={() => setHideSidebar()} to={'/new9'}>Home</NavLink>
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
    brandName: defaultBrandName.name
};
Header.propTypes = {
    brandName: PropTypes.string
};
const mapStateToProps = (store) => {
    return {
        store: store,
        isAdmin: store.loginReducer.user.isAdmin,
        currentUser: store.loginReducer.user.name,
        isLoggedIn: !!store.loginReducer.user.isLoggedIn,
        isSidebarVisible: store.sidebarReducer.isSideBarVisible,
        isPageNotFoundPage: store.generalReducer.isPageNotFoundComponent,
        screen: store.generalReducer.screen,
        isLoginPage: store.generalReducer.isLoginComponent
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