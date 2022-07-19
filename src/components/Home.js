import { useEffect, useState } from 'react';
import { Card, CardGroup, Container, Pagination, NavLink, Carousel } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';
import { changePaginationProps, changeProductView } from '../actions/products-action';
import { constants, countries, defaultScrollPosition, getAllCountriesUrl } from '../constants/constants';
import axios from 'axios';
import _ from "lodash";
import PaginationComponent from './PaginationComponent';
import { hideSidebar, showSidebar } from '../actions/sidebar-actions';
import { setPageNotFoundComponent } from '../actions/general-actions';
import img2 from '../images/header-PC2.jpg'
import img3 from '../images/header-PC3.jpg'
import Contact from './Contact';

function Home({ isSidebarVisible, isPageNotFoundPage, setPageNotFound, ...props }) {
  const currentView = props.store.productsReducer.productView;
  const currentPage = props.store.productsReducer.pagination.currentPage;
  const pageLimit = 1;
  const totalPages = props.store.productsReducer.pagination.totalPages;
  const data = props.store.productsReducer.pagination.data;
  const [currentPageValue, setCurrentPageValue] = useState("");
  let [offset, setOffset] = useState(0);
  useEffect(() => {
    setPageNotFound(false);
    setCurrentPageValue(1);
    defaultScrollPosition();
    axios.get(getAllCountriesUrl).then(({ data }) => {
      const totalPages = Math.ceil(data.length / pageLimit);
      props.setPaginationProps({ totalPages, data });
    });
  }, []);

  let indexoflastpost = currentPage * pageLimit;
  let indexoffirstpost = indexoflastpost - pageLimit;
  let array = data.slice(indexoffirstpost, indexoflastpost);
  const pages = _.range(1, totalPages + 1);
  const setValue = () => {
    setOffset(offset + 10);
  };

  return (
    <>
      <Container style={{ margin: '120px 0px 0px 0px' }}>
        <Carousel
          controls={false}
          // activeIndex={2}
          interval={5000}
          keyboard={true}
          // nextIcon={}
          // nextLabel={}
          fade={false}
          pause={false}
          indicators={false}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
              style={{ height: "250px" }}
            />
            {/* <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
              style={{ height: "250px" }}
            />
            {/* <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', padding: '10px', position: 'relative', flexDirection: currentView }}>
        {/* <NavLink className='nav-link' activeclassname="is-active" to="/home/1"></NavLink> */}
        <Card style={{ margin: '5px', flexBasis: '330px' }}>
          <div style={{ display: currentView === 'column' && "flex", width: currentView === 'column' && "100%", justifyContent: currentView === 'column' && "center" }}>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.ibsxlWfu5ieS5zx20UVuuAHaF3?w=226&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" style={{ height: '300px', width: currentView === 'column' ? '300px' : "" }} />
          </div>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer. lorem

            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={{ margin: '5px', flexBasis: '330px' }}>
          <div style={{ display: currentView === 'column' && "flex", width: currentView === 'column' && "100%", justifyContent: currentView === 'column' && "center" }}>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.ibsxlWfu5ieS5zx20UVuuAHaF3?w=226&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" style={{ height: '300px', width: currentView === 'column' ? '300px' : "" }} />
          </div>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer. lorem
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={{ margin: '5px', flexBasis: '330px' }}>
          <div style={{ display: currentView === 'column' && "flex", width: currentView === 'column' && "100%", justifyContent: currentView === 'column' && "center" }}>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.ibsxlWfu5ieS5zx20UVuuAHaF3?w=226&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" style={{ height: '300px', width: currentView === 'column' ? '300px' : "" }} />
          </div>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer. lorem
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={{ margin: '5px', flexBasis: '330px' }}>
          <div style={{ display: currentView === 'column' && "flex", width: currentView === 'column' && "100%", justifyContent: currentView === 'column' && "center" }}>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.ibsxlWfu5ieS5zx20UVuuAHaF3?w=226&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" style={{ height: '300px', width: currentView === 'column' ? '300px' : "" }} />
          </div>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer. lorem
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={{ margin: '5px', flexBasis: '330px' }}>
          <div style={{ display: currentView === 'column' && "flex", width: currentView === 'column' && "100%", justifyContent: currentView === 'column' && "center" }}>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.ibsxlWfu5ieS5zx20UVuuAHaF3?w=226&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" style={{ height: '300px', width: currentView === 'column' ? '300px' : "" }} />
          </div>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer. lorem
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <div >
          {array.map((data, i) => {
            return <p key={i}>{data.name.common}</p>
          })}
        </div>
        <div style={{ position: 'relative', width: "100%", padding: "10px", display: "flex", justifyContent: "center", alignItems: 'center', border: '1px solid' }}>
          <PaginationComponent paginationSize={5} setValue={setValue} currentPage={currentPage} size='md' pages={pages} totalPages={totalPages} setCurrentPageValue={setCurrentPageValue} />
          <div>
            <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
              <label className='page-link' style={{ border: 'none', marginTop: '-16px' }}>Page:</label>
              <input className='page-link' style={{ marginTop: '-16px', width: '95px', marginLeft: '10px' }} value={currentPageValue} onChange={(e) => {
                setCurrentPageValue(e.target.value);
              }}
                onBlur={(e) => {
                  let re1 = /^\d+$/;
                  if (re1.test(e.target.value)) {
                    if (parseInt(e.target.value) > totalPages) {
                      props.setPaginationProps({ currentPage: totalPages });
                      setCurrentPageValue(totalPages);
                    }
                    else if (parseInt(e.target.value) < 1) {
                      setCurrentPageValue(1);
                      props.setPaginationProps({ currentPage: 1 });
                    }
                    else {
                      setCurrentPageValue(parseInt(e.target.value));
                      props.setPaginationProps({ currentPage: parseInt(e.target.value) });
                    }
                  }
                  else {
                    setCurrentPageValue(currentPage);
                    props.setPaginationProps({ currentPage: currentPage });
                  }
                }} />
              <div>
                <p className='page-link ' style={{ border: 'none' }}>{constants.SHOWING} {currentPage} {constants.OF.toLocaleLowerCase()} {totalPages} {constants.PAGES.toLocaleLowerCase()}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
};

const mapStateToProps = (store) => {
  return {
    store: store,
    isSidebarVisible: store.sidebarReducer.isSideBarVisible,
    isPageNotFoundPage: store.generalReducer.isPageNotFoundComponent,
    user: store.loginReducer.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeProductViewDispatch: (view) => {
      dispatch(changeProductView(view));
    },
    setPaginationProps: (obj) => {
      dispatch(changePaginationProps(obj));
    },
    showSidebar: () => {
      dispatch(showSidebar());
    },
    hideSidebar: () => {
      dispatch(hideSidebar());
    },
    setPageNotFound: (value) => {
      dispatch(setPageNotFoundComponent(value));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);