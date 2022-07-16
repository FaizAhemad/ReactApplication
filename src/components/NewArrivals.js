import { Fragment, useEffect } from "react";
import { Container } from "react-bootstrap";
import { defaultScrollPosition, ProductStrings, responsive } from "../constants/constants";
import Carousel from 'react-multi-carousel';
import img1 from '../images/Today\'sDeal/1.jpg';
import img2 from '../images/Today\'sDeal/2.jpg';
import img3 from '../images/Today\'sDeal/3.jpg';
import img4 from '../images/Today\'sDeal/4.jpg';
import img5 from '../images/Today\'sDeal/5.jpg';
import img6 from '../images/Today\'sDeal/6.jpg';
import img7 from '../images/Today\'sDeal/7.jpg';

function NewArrivals() {

    useEffect(() => {
        defaultScrollPosition();
    }, []);

    const { TODAYS_DEAL } = ProductStrings;
    return (
        <Fragment>
            <Container style={{ marginTop: '124px' }}>
                <h2 style={{ fontWeight: 'bold' }}>{TODAYS_DEAL}</h2>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    // infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="transform 800ms ease-in-out"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                // focusOnSelect={true}
                >
                    <div style={{ display: 'flex', height: '300px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            className=""
                            src={img1}
                            alt="First slide"
                            style={{ width: "147.5px", height: '200px' }}
                        />
                        <div style={{ display: 'flex', padding: '10px' }}>
                            <span style={{ fontSize: '12px', fontWeight: 'bold', backgroundColor: 'firebrick', color: 'white', padding: '4px 3px 3px' }}>Up to 40% off</span>
                            <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'firebrick', padding: '2px 5px' }}>Deal of the day</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '300px', justifyContent: 'center', alignItems: 'center', padding: '0', width: 'fit-content' }}>
                        <img
                            className=""
                            src={img2}
                            alt="First slide"
                            style={{ height: "175px", width: '270px' }}
                        />
                        <div style={{ display: 'flex', padding: '10px' }}>
                            <span style={{ fontSize: '12px', fontWeight: 'bold', backgroundColor: 'firebrick', color: 'white', padding: '4px 3px 3px' }}>Up to 40% off</span>
                            <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'firebrick', padding: '2px 5px' }}>Deal of the day</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '300px', justifyContent: 'center', alignItems: 'center', padding: '0', width: 'fit-content' }}>
                        <img
                            className=""
                            src={img3}
                            alt="First slide"
                            style={{ width: '202.5px', height: "200px" }}
                        />
                        <div style={{ display: 'flex', padding: '10px' }}>
                            <span style={{ fontSize: '12px', fontWeight: 'bold', backgroundColor: 'firebrick', color: 'white', padding: '4px 3px 3px' }}>Up to 40% off</span>
                            <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'firebrick', padding: '2px 5px' }}>Deal of the day</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '300px', justifyContent: 'center', alignItems: 'center', padding: '0', width: 'fit-content' }}>
                        <img
                            className=""
                            src={img4}
                            alt="First slide"
                            style={{ height: "200px", width: '154px' }}
                        />
                        <div style={{ display: 'flex', padding: '10px' }}>
                            <span style={{ fontSize: '12px', fontWeight: 'bold', backgroundColor: 'firebrick', color: 'white', padding: '4px 3px 3px' }}>Up to 40% off</span>
                            <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'firebrick', padding: '2px 5px' }}>Deal of the day</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '300px', justifyContent: 'center', alignItems: 'center', padding: '0', width: 'fit-content' }}>
                        <img
                            className=""
                            src={img5}
                            alt="First slide"
                            style={{ width: '174.5px', height: "200px" }}
                        />
                        <div style={{ display: 'flex', padding: '10px' }}>
                            <span style={{ fontSize: '12px', fontWeight: 'bold', backgroundColor: 'firebrick', color: 'white', padding: '4px 3px 3px' }}>Up to 40% off</span>
                            <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'firebrick', padding: '2px 5px' }}>Deal of the day</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '300px', justifyContent: 'center', alignItems: 'center', padding: '0', width: 'fit-content' }}>
                        <img
                            className=""
                            src={img6}
                            alt="First slide"
                            style={{ width: '143px', height: "200px" }}
                        />
                        <div style={{ display: 'flex', padding: '10px' }}>
                            <span style={{ fontSize: '12px', fontWeight: 'bold', backgroundColor: 'firebrick', color: 'white', padding: '4px 3px 3px' }}>Up to 40% off</span>
                            <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'firebrick', padding: '2px 5px' }}>Deal of the day</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '300px', justifyContent: 'center', alignItems: 'center', padding: '0', width: 'fit-content' }}>
                        <img
                            className=""
                            src={img7}
                            alt="First slide"
                            style={{ width: '202.5px', height: "200px" }}
                        />
                        <div style={{ display: 'flex', padding: '10px' }}>
                            <span style={{ fontSize: '12px', fontWeight: 'bold', backgroundColor: 'firebrick', color: 'white', padding: '4px 3px 3px' }}>Up to 40% off</span>
                            <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'firebrick', padding: '2px 5px' }}>Deal of the day</span>
                        </div>
                    </div>
                </Carousel>
            </Container>
            <Container style={{ marginTop: '40px' }}>
                <h2 style={{ fontWeight: 'bold' }}>{TODAYS_DEAL}</h2>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    // infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="transform 800ms ease-in-out"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                // focusOnSelect={true}
                >
                    <div style={{ display: 'flex', height: '300px', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '0', width: 'fit-content' }}>
                        <img
                            className=""
                            src={img1}
                            alt="First slide"
                            style={{ width: "147.5px", height: '200px' }}
                        />
                        <div style={{ display: 'flex', padding: '10px' }}>
                            <span style={{ fontSize: '12px', fontWeight: 'bold', backgroundColor: 'firebrick', color: 'white', padding: '4px 3px 3px' }}>Up to 40% off</span>
                            <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'firebrick', padding: '2px 5px' }}>Deal of the day</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '300px', justifyContent: 'space-between', alignItems: 'center', padding: '0', width: 'fit-content' }}>
                        <img
                            className=""
                            src={img2}
                            alt="First slide"
                            style={{ height: "175px", width: '270px' }}
                        />
                        <div style={{ display: 'flex', padding: '10px' }}>
                            <span style={{ fontSize: '12px', fontWeight: 'bold', backgroundColor: 'firebrick', color: 'white', padding: '4px 3px 3px' }}>Up to 40% off</span>
                            <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'firebrick', padding: '2px 5px' }}>Deal of the day</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '300px', justifyContent: 'space-between', alignItems: 'center', padding: '0', width: 'fit-content' }}>
                        <img
                            className=""
                            src={img3}
                            alt="First slide"
                            style={{ width: '202.5px', height: "200px" }}
                        />
                        <div style={{ display: 'flex', padding: '10px' }}>
                            <span style={{ fontSize: '12px', fontWeight: 'bold', backgroundColor: 'firebrick', color: 'white', padding: '4px 3px 3px' }}>Up to 40% off</span>
                            <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'firebrick', padding: '2px 5px' }}>Deal of the day</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '300px', justifyContent: 'space-between', alignItems: 'center', padding: '0', width: 'fit-content' }}>
                        <img
                            className=""
                            src={img4}
                            alt="First slide"
                            style={{ height: "200px", width: '154px' }}
                        />
                        <div style={{ display: 'flex', padding: '10px' }}>
                            <span style={{ fontSize: '12px', fontWeight: 'bold', backgroundColor: 'firebrick', color: 'white', padding: '4px 3px 3px' }}>Up to 40% off</span>
                            <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'firebrick', padding: '2px 5px' }}>Deal of the day</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '300px', justifyContent: 'space-between', alignItems: 'center', padding: '0', width: 'fit-content' }}>
                        <img
                            className=""
                            src={img5}
                            alt="First slide"
                            style={{ width: '174.5px', height: "200px" }}
                        />
                        <div style={{ display: 'flex', padding: '10px' }}>
                            <span style={{ fontSize: '12px', fontWeight: 'bold', backgroundColor: 'firebrick', color: 'white', padding: '4px 3px 3px' }}>Up to 40% off</span>
                            <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'firebrick', padding: '2px 5px' }}>Deal of the day</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '300px', justifyContent: 'space-between', alignItems: 'center', padding: '0', width: 'fit-content' }}>
                        <img
                            className=""
                            src={img6}
                            alt="First slide"
                            style={{ width: '143px', height: "200px" }}
                        />
                        <div style={{ display: 'flex', padding: '10px' }}>
                            <span style={{ fontSize: '12px', fontWeight: 'bold', backgroundColor: 'firebrick', color: 'white', padding: '4px 3px 3px' }}>Up to 40% off</span>
                            <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'firebrick', padding: '2px 5px' }}>Deal of the day</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '300px', justifyContent: 'space-between', alignItems: 'center', padding: '0', width: 'fit-content' }}>
                        <img
                            className=""
                            src={img7}
                            alt="First slide"
                            style={{ width: '202.5px', height: "200px" }}
                        />
                        <div style={{ display: 'flex', padding: '10px' }}>
                            <span style={{ fontSize: '12px', fontWeight: 'bold', backgroundColor: 'firebrick', color: 'white', padding: '4px 3px 3px' }}>Up to 40% off</span>
                            <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'firebrick', padding: '2px 5px' }}>Deal of the day</span>
                        </div>
                    </div>
                </Carousel>
            </Container>
        </Fragment>
    )
};

export default NewArrivals;