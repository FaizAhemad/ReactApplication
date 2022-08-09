import { Fragment, useEffect, useState, lazy, Suspense } from 'react';
import { Form, Container } from 'react-bootstrap';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import ReduxToastr, { toastr } from 'react-redux-toastr';
import axios from 'axios';
import "./App.css"
import Header from './components/Header';
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
import { detectScreenResolution, isAdminRegistered } from './actions/general-actions';
import { checkForAdminAccount } from './constants/constants';
import ImagePreview from './components/ImagePreview';
import NotLoggedIn from './components/NotLoggedIn';

const Login = lazy(() => import('./components/Login'));
const Home = lazy(() => import('./components/Home'));
const AdminHome = lazy(() => import('./components/Admin/AdminHome'));
const pageAccessedByReload = (
  (window.performance.navigation && window.performance.navigation.type === 1) ||
  window.performance
    .getEntriesByType('navigation')
    .map((nav) => nav.type)
    .includes('reload')
);

function App({ setScreenResolutionValue, setIsAdminFound, isAdminFound, imageSrc, isOpenImagePreviewModal, isLoggedIn, isAdmin }) {
  window.addEventListener('beforeunload', () => {
    setScreenResolutionValue(window.screen.height, window.screen.width);
  });

  useEffect(() => {
    axios.get(checkForAdminAccount).then(res => {
      const { adminFound } = res.data;
      setIsAdminFound(adminFound);
    }).catch(e => {
      setIsAdminFound(false);
      toastr.error('Oops!', 'Something went wrong');
    })
    if (pageAccessedByReload) {
      toastr.clean();
    }
  }, []);

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
          <Header />
          <Container id='main'>
            <Suspense fallback='loading Icons'>
              <SocialLinks />
            </Suspense>
            <Suspense fallback='loading...............'>
              <ImagePreview imgSrc={imageSrc} open={isOpenImagePreviewModal} />
              <Routes>
                <Route path='/' element={<Navigate replace to="/home" />} />
                <Route path='/home' element={isAdmin ? <Navigate to={'/admin'} /> : <Home />} children={isAdmin ? '' : <Route path='/home/1' element={<Home1 />} />} />
                <Route path='/categories' element={<Categories />} />
                <Route path='/login' element={isLoggedIn ? (isAdmin ? <Navigate replace to="/admin/home" /> : <Navigate replace to="/home" />) : <Login />} />
                <Route path='/register' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/mycart' element={isLoggedIn ? <MyCart /> : <NotLoggedIn />} />
                <Route path='/myorders' element={isLoggedIn ? <MyOrders /> : <NotLoggedIn />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/newarrivals' element={<NewArrivals />} />
                <Route path='/admin' element={<Navigate replace to="/admin/home" />} />
                <Route path='/admin/home' element={isLoggedIn && isAdmin ? <AdminHome /> : <Navigate to={'/login'} replace />} />
                <Route path='/admin/*' element={<PageNotFound />} />
                <Route path='*' element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </Container>
          <Footer />
          <ReduxToastr
            timeOut={0}
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
};

const mapStateToProps = (store) => {
  return {
    isAdminFound: store.generalReducer.isAdminRegistered,
    imageSrc: store.generalReducer.imageSrcForPreview,
    isOpenImagePreviewModal: store.generalReducer.isImagePreviewModalOpen,
    isAdmin: store.loginReducer.user.isAdmin,
    isLoggedIn: !!store.loginReducer.user.isLoggedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setScreenResolutionValue: (h, w) => {
      dispatch(detectScreenResolution(h, w))
    },
    setIsAdminFound: (value) => {
      dispatch(isAdminRegistered(value))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
