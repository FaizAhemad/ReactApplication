import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect, useDispatch, useSelector } from 'react-redux';
import { changeProductView } from '../actions/products-action';

function Header({ brandName, isLoggedIn, isAdmin, ...props }) {
    let [searchQuery, setSearchuery] = useState();
    let [expanded, setExpanded] = useState(false);

    const { pathname } = useLocation();
    const navigate = useNavigate();
    const currentView = props.productView.productsReducer.productView;
    useEffect(() => {
        setTimeout(() => {

        }, 2000)
        console.log(isLoggedIn)
    });
    const goToHome = () => {
        if (pathname === '/home' || pathname === '/') {
            return;
        }
        else {
            navigate('/home');
        }
    }
    const closeNav = () => {
        setExpanded(false);
        console.log(expanded)
    }
    const expandNav = () => {
        setExpanded(!expanded);
        console.log(expanded)

    }

    return (
        <>
            <Navbar className='headerNavbar' bg="dark" variant="dark" expand="lg" fixed="top" onToggle={expandNav} expanded={expanded}>
                <Container fluid>
                    <Navbar.Brand ><Link className='brand' to="/">{brandName}</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" onClick={expandNav} />

                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto" >
                            <NavLink onClick={closeNav} className='nav-link' activeclassname="is-active" to="/home">Home</NavLink>
                            <NavLink onClick={closeNav} className='nav-link' activeclassname="is-active" to="/newarrivals">New Arrivals</NavLink>
                            <NavLink onClick={closeNav} className='nav-link' activeclassname="is-active" to="/products">All Products</NavLink>
                            <NavLink onClick={closeNav} className='nav-link' activeclassname="is-active" to="/categories">Categories</NavLink>
                        </Nav>

                        <Nav className="me-auto" >
                            <Form className="d-flex" style={{ padding: '0', boxShadow: 'none' }}>
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    value={searchQuery}
                                    onChange={e => setSearchuery(e.target.value)}

                                />
                            </Form>
                        </Nav>

                        {!isLoggedIn &&


                            <Nav className="justify-content-end" >
                                <NavLink onClick={closeNav} className='nav-link' activeclassname="is-active" to="/login">Login</NavLink>
                                <NavLink onClick={closeNav} className='nav-link' activeclassname="is-active" to="/register">Register</NavLink>
                            </Nav>}

                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <div style={{ background: 'white', width: '100%', height: '60px', position: 'fixed', zIndex: 20, top: '60px', display: 'flex', alignItems: 'center', padding: '0 10px', justifyContent: 'space-between' }}>

                <Nav>
                    <button onClick={goToHome} className='nav-link buttonAsLink'>Go to Home &#127968;</button>
                </Nav>

                <div>
                    <b>Change product view style:</b> <span onClick={() => props.changeProductViewDispatch('row')} style={{ cursor: 'pointer', color: currentView === 'row' ? 'blue' : '', fontWeight: currentView === 'row' ? 'bold' : 'normal' }}>Grid View</span> &nbsp;&nbsp;  <span onClick={() => props.changeProductViewDispatch('column')} style={{ cursor: 'pointer', color: currentView === 'column' ? 'blue' : '', fontWeight: currentView === 'column' ? 'bold' : 'normal' }}>List View</span>
                </div>

            </div>
        </>


    )
}

Header.defaultProps = {
    brandName: "FH Infotech"
}

Header.propTypes = {
    brandName: PropTypes.string
}

const mapStateToProps = (store) => {
    return {
        productView: store,
        isAdmin: store.loginReducer.isAdmin,
        isLoggedIn: store.loginReducer.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeProductViewDispatch: (view) => {
            dispatch(changeProductView(view))
        }

    }
}





export default connect(mapStateToProps, mapDispatchToProps)(Header);