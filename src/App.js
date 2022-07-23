import { Fragment, useEffect, useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import ReduxToastr from 'react-redux-toastr';
import "./App.css"
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';
import Home1 from './components/Home1';
import MyCart from './components/MyCart';
import MyOrders from './components/MyOrders';
import PageNotFound from './components/PageNotFound';
import Categories from './components/Categories';
import NewArrivals from './components/NewArrivals';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './components/Fallback';
import ErrorModal from './components/Modal/ErrorModal';
import Logout from './components/Logout';
import { detectScreenResolution } from './actions/general-actions';

const errorHandler = (error, errorInfo) => {
  console.log('Error>>>', error, errorInfo);
}

function App({ setScreenResolutionValue }) {
  window.addEventListener('beforeunload', () => {
    setScreenResolutionValue(window.screen.height, window.screen.width);
  });
  useEffect(() => {
    window.removeEventListener('beforeunload', () => {
      setScreenResolutionValue(0, 0);
    });
  });
  return (
    <BrowserRouter>
      {/* <ErrorBoundary FallbackComponent={ErrorModal} onError={errorHandler}> */}
      <Fragment>
        <div style={{ position: "relative" }}>
          {/* <div id='scrollToTop' onClick={() => window.scrollTo(0, 0)} style={{ fontSize: '40px', position: "fixed", bottom: 70, right: 20, zIndex: 1 }}>&#128285;</div> */}
          <SocialLinks />
          <Header />
          <Container id='main'>
            <Routes>
              <Route path='/' element={<Navigate replace to="/home" />} />
              <Route path='/home' element={<Home />} children={<Route path='/home/1' element={<Home1 />} />} />
              <Route path='/categories' element={<Categories />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Login />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/mycart' element={<MyCart />} />
              <Route path='/myorders' element={<MyOrders />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/newarrivals' element={<NewArrivals />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </Container>
          <Footer />
          <ReduxToastr
            timeOut={3000}
            newestOnTop={true}
            preventDuplicates
            position="top-right"
            getState={(state) => state.toastr} // This is the default
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick />
        </div>
      </Fragment>
      {/* </ErrorBoundary> */}
    </BrowserRouter>
  );
}

const mapStateToProps = (store) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setScreenResolutionValue: (h, w) => {
      dispatch(detectScreenResolution(h, w));
    }
  }
}

export default connect(null, mapDispatchToProps)(App);
