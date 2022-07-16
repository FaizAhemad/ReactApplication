import { useEffect, useState } from 'react';
import { Card, CardGroup, Container, Pagination, NavLink, Carousel } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';
import { changePaginationProps, changeProductView } from '../actions/products-action';
import { constants, countries, getAllCountriesUrl } from '../constants/constants';
import axios from 'axios';
import _ from "lodash";
import PaginationComponent from './PaginationComponent';
import { hideSidebar, showSidebar } from '../actions/sidebar-actions';

function Home({ isSidebarVisible, ...props }) {
  const currentView = props.store.productsReducer.productView;
  const currentPage = props.store.productsReducer.pagination.currentPage;
  const pageLimit = 1;
  const totalPages = props.store.productsReducer.pagination.totalPages;
  const data = props.store.productsReducer.pagination.data;
  const [currentPageValue, setCurrentPageValue] = useState("");
  let [offset, setOffset] = useState(0);

  useEffect(() => {
    console.log(isSidebarVisible)
    setCurrentPageValue(1);
    axios.get(getAllCountriesUrl).then(({ data }) => {
      const totalPages = Math.ceil(data.length / pageLimit);
      props.setPaginationProps({ totalPages, data });
    })
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
          interval={1000}
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
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwAvQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EADkQAAIBAwMBBgQEBAYDAQAAAAECAwAEEQUSITEGEyJBUWEUcYGRMlKhsQdiwdEVIzNCovByguEk/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIREAAgICAQQDAAAAAAAAAAAAAAECEQMSMQQTQVEhImH/2gAMAwEAAhEDEQA/AOfxSxRNtRxX2z5JAilip4pYqlB7aW2iYpsUBDbSqeKW2gB09T202KgI0qntpBaEIYpYom2ltoAe2nC0TbT7aFBgU+KmFp9tAQApbaIFpYoAe2liibafbQUBxSxRMUttCUE2022j7aW32oaAbKYpVjbTFaWAG2lto22mC0ALbS20bZS21LADbS20bbS2/elglLZSxWUF2ygRTMyqcjJ248qr7a6jWoBbdnbR5RCsGN0J3tkZILHJAB8umcVxVxrdjA6q7sVJxvVeB/WuGPPFp7M6yxST+DRghaeeOGMZeR1RRnGSTgVO7tntbqW3lAEkTlGAbPIPrVzsoYL/AFW2Ns8Ux3blJY4BHIPAz5dMUXX4mTVZxLs73dlyhOCx6nmtLKnl1Xozp9LZkhacLRdtPtrsYBbaW2jbaW2gBbaW2i7afbQAttNto22lsoAG2lto+ylsoAuwUu7rRTUrCe4eLuoHkThkjbkH5f8A2iyJYF9pE0Z8+hArwLrYvk9T6ZrgyClNtrWewgLAR3K5PQMD+tQbSZs4jaN//Bga6x6nG/JzeGa8GUVpKEydzY9OM/etBtPuUQh4Wz7DNQng7qSRBkhXIUnzHPNb7ifDM6tcopbfKn21csbUXN3FAzlA7YL7d2Pp50fVNPFjLsVpCN7r/mRFD4TjPPUe9ac1dE1bVmHd3ttaeGZ/HjO0DnFZFzrkjZFugjHkx8Rpa5a3NzrJjtbeWVjEn4FyPPqeg+tTg7Kag695cSQ28eM5Ztx+w4/Wvn5+qcZNWevFgTjdGTdXlxdFTczySlRtXexO0egHkPYVmag3gX/yrsBp3ZyxQy3moPd7PxCFtyqffaP3P0p7290ZLKV00JvhYZdkzPHGGB9MFs+dePvJ8Jnp7fs4e2uZraZJreaSKVTlZI3KsD7Ecit2HtZqBk33zC8J6tIcP96NJY9nLrJEs1jIGw3eAoqn0IPH2xVWfstd7TJZXNvdRdcq2Dj28j+lbjn1d8ElitHS6VqlvqiyGAOrR7d6sOmc4+fQ1o7a5zsVZ3Npc6hHdwSRNiPG4cH8XQ+fWur2e1fYw5HOCbPnZYazpAAtLZVjZ7UtntW1KzFFfZThKsBKcJzjB6Z4psEiuEp9lWRGzMFVGLHgADJzVmLTp5MHaFBIXLHHO7b069SBWJZYrlmlBvhGbspBPatSCyjkTvE726TAIW1TJPiIPXHTGfqKvTaDqW1PhbG0I8W5rtnUnxHGAPbFcZdXBcHVYJM8p7LXRGorPMzSSSMcgdSWJB/elHrTt2jtrkBm725EYQMchCQoH2/WuytptAF4JW0SO2jzkvATv/T96dNP7IJrNvd2dlNB3MySpIXYBCp3dMc8j618raJ79ZHOTdopB2piiM0ht++EBXPhbB27iPnzWxa6vJc6vNHuT4cMEUDjLdPtuH2oy9neySa1a39nf3/eRTpMe8jyNysG8Qx0JHl60Mdnuz/xEdzpuvTlThnF1Afx85Pyy2cc9Kv1ZKaLOmdoHnubhg5EEZO11c8qPP5Y5oln2rWfTZr2XBjibBV1DE9Menr/AErOHYy23y21r2jtJoHiKLJIjIV3Kqk488YPHnQo/wCH+rPotzaWl3ZTyrcLL4bkBZI1VsAA+ZJX7Ur9IdJDrFm0drKIYt1x4omjyhPAPl0PI+9WJ7izvZn7+WctEPETIH28e9cpL2b7R28Gm9zalhEiJIyOp7lhLub/AI4+1VLu17QQxalu0y4VZYyP9IksTIemP5D9jWlKSdpk1T5Rf1vWRYamtql60VphGZoov83BDZ65HUL9GzXM6tqltczN3KXEkZRAPipixDB8scc9RhfaqWp/ELNELtGjmFvEGUjBHgHUeVUCeamib2fJdmlSNvUu0d3qFq1qY4IbclTshXGMdOayru9upIJI3uZSkrl5F38O3qfXpQc0O5/APnVUIoNsu2XaG+szJ/pTiVt0gnTduOAP2Aqdlq1nHcySXNkybyx3W0pRgWbPXI6dPtWJmlVcIsbM9I7I6gNQnvUW5lmRApQSqNyqSfPz6Cul7uuQ/hHcQ215rMk0cMmyzEgWVNwO1vL7ivR7XW9PmudOiWCx/wD2W7yg9yfCVzkH38J+3yrvj6hYo60cMmJzltZj91npViOxmkxhMBjgM3A6Z61sabq1rcWlncv8Dam63mIG2JJx6Eceh59QKpxdqAy6XI14qG5kaN0SNVKDKAc48zInyqy6uXhEXTrywUOkzSKDtkIPTZGSeoz5cda2ruxgaJEMVtbvgkLMiJglSBkKSWwcH3xXN3/abvNHvpVvpXkhuB3TuxxsILDPocKaBqNzFGmo907P8G6HCqRuDIX+Y6Y+tcJZpz5OqxRidAY7CJW33Uki85jgjCYzu6McHkNj6CmfUNNgkSWOzgfedqyzeNjk5/cZ/WsDM019era29zMkloHhKRk+JolcHOME+IjGMdKzv8B7V3vZPT4/8LnivYb5zIszrFuiKgqSSQOpIrHy+TdI62TXZzdCzjdw0q5RYlxn024APNYs2vmG5mj37grlc53eIHB9aa+0G/l7RQ6s+o6baqlvb98sl0CyugBb8PvnketVX7OaY1/eSy9q7aPv5TMI/hpG27uTzxnPX60Ic1qBvbIavA4IubeVIto5DZLA449FB6DqKjplzdDS7i8u1feke2JGQZcjPJB8+MDjzoXaizM/bq50iS5kYGdD3znLMNgbxHI6dF9vvXVWXZf4w23xc8senSM2JVZVbevCqoOeBjHy+dTJFpfVFUmc3od9eSXUa3sUqBFkO54yucD5e+Kq6RqM95q0FrFAvdO0m/g9Bkqc+XSu9H8N7Gxt1uIdQvpJ9oUCeRdgL8EnAzgemfvXOab2XWw1m8sUvbpTY2RnDKF2zF8IwB4GcHjPnV0Vl2ZYtrW5ZJJHALKhdl2lQOQOPbnFUrqb4Kx+InRJA8/dIyqVAOC3OR5AV0s+iWa6ndWkWo6pHb3MbCFobjKxRqQTyc5Y4XHXz+dYH8QYYtPubOxC3E8BCTbu8aQ8hkOfF5qrcAg5YZPQVO2XZgptXMFpaSqzqZULd2GwCpIxz08q2RrV/HfsqXlw0qxHMhYE43bCPPzwPrT9nNEsb46MLxXmjfTJJe6mAOSrsiq2fbGB7UHsydN7R9o9eupYYolQwwyOku0Sp3h8ePLmMcj2zgk5jxfpe4cN2iupb3WLiVwzSZAbjngBf+/Os2KGacyCKNmMalnAUkgCveLfsdokthqvcrZ95cO4guXcHaw/ARjphuT06edcbo+il4HRhCtxLq7wyPuBGwbVDgeh2uR8z5EV1S8HHK2otx5PNGyiozdHXcpyORnFMUkuHSCGNpJWPhRFyx+QFe2dtOz2maDpWovDJHG6W6iNe7He8gjwDIz4tprP7IT2Ok63cIotxFOYCt4ABGx+HVO6Q5yW7yQnA44OT6Uq/TxqWOSEgSxshYBgGGMj1p4oJpUd4YZZEj/GyISE+eOleu2OnwTTFL2C3d7XWbeeAvtVVhaQswBP4gE2ggcLgeldJZ23Z2TUL641KLTUSILLcDeo3uzTKd3TnBjOflUstHm38JNNt9R1LVYrmCeXNiQFiZlOCy55HToOa7xND7K27QPGLvdbDYN1y2FU5JzzyfEevtXH/wAHLtrXtue6wkT27Qup4PiZcHHXNaMVzFrHZDtTc/4YLa7tHR4gxkJCFyTtJODgZ4AH7VmcZP5TNRa8nSLZ9mLaK0jSOcrp8pMINx+Hdt/Fzknwjj+9Cii7LWyiCHToyYMFA1wx2gd3yRu6/wCTH09Pc54TVrpY9JsZ7S1jEwMC3jANmTw54UYO1jH14Phx55rve01n2egtIZtOtYVur6KG2t2gJKW5YBSWVSCAAfM88ZrOkvZq4rwL4zs0gKR2OnhJgABIA2WGRk5J/MfualH2ltonPdXFtGVwSIoUQsM7RkgZ6iua0fRrW9s+ylvBcyfFyyySXUv40TYGcjyAIZFXI8yc5rq9e7M2ek6Xf3dgvxcwIIUgEmHKtg4GMhhnOM4wKmkvZdo+iMnayORTMZ1MTZCf5z7c9CMbsZ5HFZc2q6a8sdssiPJcsgTw7ixPKkE8/wC7jH7VV0/sbrepdn4GU2aDO9HDBcrlATtwCOA/GPT1rTP8ObtbrSbiPUIjBYIhZgoLOYtmwBc+eznnjpzU7bfLG6XCKi6xaLp0rW7RvFaSlwhUeCTG45OD/Xyo0+qrfqs9w0c+CUEkq7uQASASPcfen1fsivZ5JrazabUpdSieQwBRkN/pkoAM4HeKefy5yKDoWh30NpJFNYg5k7wb51jPKqpP4TkeHrWXifsvcSL82nxz6qdQeGI3X+2YoC4GMcHGRxxWzFH3NrE67jKVKtliRjJPToKMLcg9f0ozQgjG8j6V6TzIrNJNJAR6UGwhfvpi4z3qgNn0yK0Y4FCsC/8AxqcMKofxHp6GhQIjAlllPXcQvPkaqavb/EzpKSfyr8hz/WtcJhep8vImpGFWVdzNx6KahSlp0ZilhHklvtH3z+9D0qzWyupmUbizAscY8yf61qpEgbcC3THQ04jTJ5bn1U1QhRXUiW0xCjIclc1kwRlVjDbWDXBdsjzzmtF1UZABOfY1BYR5g/Y1AyOtQWxS4jhiRTIFJI68ZNVbe1hmumeSNdvhAHkMIP6irzxhjzk/Q0kj2528UFlK3TkkqATcxHA/Kp/tWhZ7BNJHKoZZFVWJ9i5/qKGsQyARznIPqKl3IBJAP3pQsxtC0yNNRJMCHdySVzyCOf0rRg02OCwvoQvilwMf+x6fertnGscwKjBwaPjjOOpqhGDNpatbKoTxcZ564zWpewQSRIgGDFGu0j83v61a2jByPOkUVsmoUx4oO6tbTulCSQljkL6lvL5Grl5tuIplIA3Mp+gGKs90OnNMIx/NQGH8KViKIxUbvL/vtU5WuA0UySFZEyR7ZJP9a2dgx5/UVExKxIP7UBU1iO3u2hmEa96AQ5A5PT+1Z1haiMPuDYOMVs90uSTnpjpTCFMef2NCDLBkfhP1oqw8dBRRGR/ub71PYQM5P1rRAaxqAcipKoHQVMKT0zUhEfNjQAsGltNH7r+ZqXd/zNUAA+Hr51HaW6nj0q0IVyTlsn1NLuV9/wBKAqbcUwBq0sO4ludvl0596fuR6t+lClXaTS2EVaEK+ppd0PVv+/SoCmyZIOelSUBhkVa7kfmb9P7VB4tnKnjz4FAQiXD0YLxUFU+bH7CpYP5z+lUEgOtRKCmII/3NTeL8xoBBOT8qYAUhuB8RZh8+lTVVbo7fU0APbkCo7fEflRu6x5t96iY/5m+9AC24zUaMY8Dqah3Z/MaEsIMt0GPnRAo6nn501TFUzYvlUqapDpQqFSpCpUKLFDPiJUcgdfc+lSlYohKnBqYRVUADAGagIgCnxT4pYoCO2ltqeKbFANjio44xjOaJTGhSvsG7bnny96cjFTm4QHzDCmxQECKYVOmNCEDUW6VI1EUKJXYdeRUw6twOvvUKiwGCaEYU5qJoYY5254qdLJR//9k="
              alt="First slide"
              style={{ height: "250px" }}
            />
            {/* <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="data:image/jpeg;base64,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"
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
              src="data:image/jpeg;base64,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"
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
            <button>Click me</button>
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
                <p className='page-link ' style={{ border: 'none' }}>{constants.SHOWING} {currentPage} {constants.OF} {totalPages}</p>
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
    isSidebarVisible: store.sidebarReducer.isSideBarVisible
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
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);