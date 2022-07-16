import { Fragment, useEffect, useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
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

function App() {

  // useEffect(() => {
  //   window.addEventListener('resize',()=>{
  //     console.log(window.screen.availWidth);

  //   })
  // });
  return (
    <BrowserRouter>
      <Fragment>
        <div style={{ position: "relative" }}>
          <div id='scrollToTop' onClick={() => window.scrollTo(0, 0)} style={{ fontSize: '40px', position: "fixed", bottom: 70, right: 20, zIndex: 1 }}>&#128285;</div>
          <SocialLinks />
          <Header />
          <Container id='main'>
            <Routes>
              <Route path='/' element={<Navigate replace to="/home" />} />
              <Route path='/home' element={<Home />} children={<Route path='/home/1' element={<Home1 />} />} />
              <Route path='/categories' element={<Categories />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Login />} />
              <Route path='/mycart' element={<MyCart />} />
              <Route path='/myorders' element={<MyOrders />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/newarrivals' element={<NewArrivals />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </Container>
          <Footer />
        </div>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
