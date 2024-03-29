import {Fragment, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import {
  defaultScrollPosition,
  ProductStrings,
  responsive,
  responsive1,
} from '../constants/constants';
import img1 from "../images/Today'sDeal/1.jpg";
import img2 from "../images/Today'sDeal/2.jpg";
import img3 from "../images/Today'sDeal/3.jpg";
import img4 from "../images/Today'sDeal/4.jpg";
import img5 from "../images/Today'sDeal/5.jpg";
import img6 from "../images/Today'sDeal/6.jpg";
import img7 from "../images/Today'sDeal/7.jpg";
import img8 from '../images/header-PC2.jpg';
import img9 from '../images/header-PC3.jpg';

function NewArrivals({setPageNotFound, ...props}) {
  useEffect(() => {
    defaultScrollPosition();
  }, []);
  const {TODAYS_DEAL} = ProductStrings;
  return (
    <>
      <Helmet>
        <title>New Arrivals</title>
      </Helmet>
      <Container style={{marginTop: '124px'}}>
        <h2 style={{fontWeight: 'bold'}}>{TODAYS_DEAL}</h2>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr // means to render carousel on server-side.
          // infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl
          customTransition="transform 800ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          // focusOnSelect={true}
        >
          <div
            style={{
              display: 'flex',
              height: '300px',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0',
              width: 'fit-content',
            }}
          >
            <img
              className=""
              src={img1}
              alt="First slide"
              style={{width: '147.5px', height: '200px'}}
            />
            <div style={{display: 'flex', padding: '10px'}}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  backgroundColor: 'firebrick',
                  color: 'white',
                  padding: '4px 3px 3px',
                }}
              >
                Up to 40% off
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 'bold',
                  color: 'firebrick',
                  padding: '2px 5px',
                }}
              >
                Deal of the day
              </span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '300px',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0',
              width: 'fit-content',
            }}
          >
            <img
              className=""
              src={img2}
              alt="First slide"
              style={{height: '175px', width: '270px'}}
            />
            <div style={{display: 'flex', padding: '10px'}}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  backgroundColor: 'firebrick',
                  color: 'white',
                  padding: '4px 3px 3px',
                }}
              >
                Up to 40% off
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 'bold',
                  color: 'firebrick',
                  padding: '2px 5px',
                }}
              >
                Deal of the day
              </span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '300px',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0',
              width: 'fit-content',
            }}
          >
            <img
              className=""
              src={img3}
              alt="First slide"
              style={{width: '202.5px', height: '200px'}}
            />
            <div style={{display: 'flex', padding: '10px'}}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  backgroundColor: 'firebrick',
                  color: 'white',
                  padding: '4px 3px 3px',
                }}
              >
                Up to 40% off
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 'bold',
                  color: 'firebrick',
                  padding: '2px 5px',
                }}
              >
                Deal of the day
              </span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '300px',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0',
              width: 'fit-content',
            }}
          >
            <img
              className=""
              src={img4}
              alt="First slide"
              style={{height: '200px', width: '154px'}}
            />
            <div style={{display: 'flex', padding: '10px'}}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  backgroundColor: 'firebrick',
                  color: 'white',
                  padding: '4px 3px 3px',
                }}
              >
                Up to 40% off
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 'bold',
                  color: 'firebrick',
                  padding: '2px 5px',
                }}
              >
                Deal of the day
              </span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '300px',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0',
              width: 'fit-content',
            }}
          >
            <img
              className=""
              src={img5}
              alt="First slide"
              style={{width: '174.5px', height: '200px'}}
            />
            <div style={{display: 'flex', padding: '10px'}}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  backgroundColor: 'firebrick',
                  color: 'white',
                  padding: '4px 3px 3px',
                }}
              >
                Up to 40% off
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 'bold',
                  color: 'firebrick',
                  padding: '2px 5px',
                }}
              >
                Deal of the day
              </span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '300px',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0',
              width: 'fit-content',
            }}
          >
            <img
              className=""
              src={img6}
              alt="First slide"
              style={{width: '143px', height: '200px'}}
            />
            <div style={{display: 'flex', padding: '10px'}}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  backgroundColor: 'firebrick',
                  color: 'white',
                  padding: '4px 3px 3px',
                }}
              >
                Up to 40% off
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 'bold',
                  color: 'firebrick',
                  padding: '2px 5px',
                }}
              >
                Deal of the day
              </span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '300px',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0',
              width: 'fit-content',
            }}
          >
            <img
              className=""
              src={img7}
              alt="First slide"
              style={{width: '202.5px', height: '200px'}}
            />
            <div style={{display: 'flex', padding: '10px'}}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  backgroundColor: 'firebrick',
                  color: 'white',
                  padding: '4px 3px 3px',
                }}
              >
                Up to 40% off
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 'bold',
                  color: 'firebrick',
                  padding: '2px 5px',
                }}
              >
                Deal of the day
              </span>
            </div>
          </div>
        </Carousel>
      </Container>
      <Container style={{marginTop: '40px'}}>
        <h2 style={{fontWeight: 'bold'}}>{TODAYS_DEAL}</h2>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr // means to render carousel on server-side.
          // infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl
          customTransition="transform 800ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          // focusOnSelect={true}
        >
          <div
            style={{
              display: 'flex',
              height: '300px',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0',
              width: 'fit-content',
            }}
          >
            <img
              className=""
              src={img1}
              alt="First slide"
              style={{width: '147.5px', height: '200px'}}
            />
            <div style={{display: 'flex', padding: '10px'}}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  backgroundColor: 'firebrick',
                  color: 'white',
                  padding: '4px 3px 3px',
                }}
              >
                Up to 40% off
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 'bold',
                  color: 'firebrick',
                  padding: '2px 5px',
                }}
              >
                Deal of the day
              </span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '300px',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0',
              width: 'fit-content',
            }}
          >
            <img
              className=""
              src={img2}
              alt="First slide"
              style={{height: '175px', width: '270px'}}
            />
            <div style={{display: 'flex', padding: '10px'}}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  backgroundColor: 'firebrick',
                  color: 'white',
                  padding: '4px 3px 3px',
                }}
              >
                Up to 40% off
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 'bold',
                  color: 'firebrick',
                  padding: '2px 5px',
                }}
              >
                Deal of the day
              </span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '300px',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0',
              width: 'fit-content',
            }}
          >
            <img
              className=""
              src={img3}
              alt="First slide"
              style={{width: '202.5px', height: '200px'}}
            />
            <div style={{display: 'flex', padding: '10px'}}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  backgroundColor: 'firebrick',
                  color: 'white',
                  padding: '4px 3px 3px',
                }}
              >
                Up to 40% off
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 'bold',
                  color: 'firebrick',
                  padding: '2px 5px',
                }}
              >
                Deal of the day
              </span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '300px',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0',
              width: 'fit-content',
            }}
          >
            <img
              className=""
              src={img4}
              alt="First slide"
              style={{height: '200px', width: '154px'}}
            />
            <div style={{display: 'flex', padding: '10px'}}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  backgroundColor: 'firebrick',
                  color: 'white',
                  padding: '4px 3px 3px',
                }}
              >
                Up to 40% off
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 'bold',
                  color: 'firebrick',
                  padding: '2px 5px',
                }}
              >
                Deal of the day
              </span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '300px',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0',
              width: 'fit-content',
            }}
          >
            <img
              className=""
              src={img5}
              alt="First slide"
              style={{width: '174.5px', height: '200px'}}
            />
            <div style={{display: 'flex', padding: '10px'}}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  backgroundColor: 'firebrick',
                  color: 'white',
                  padding: '4px 3px 3px',
                }}
              >
                Up to 40% off
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 'bold',
                  color: 'firebrick',
                  padding: '2px 5px',
                }}
              >
                Deal of the day
              </span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '300px',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0',
              width: 'fit-content',
            }}
          >
            <img
              className=""
              src={img6}
              alt="First slide"
              style={{width: '143px', height: '200px'}}
            />
            <div style={{display: 'flex', padding: '10px'}}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  backgroundColor: 'firebrick',
                  color: 'white',
                  padding: '4px 3px 3px',
                }}
              >
                Up to 40% off
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 'bold',
                  color: 'firebrick',
                  padding: '2px 5px',
                }}
              >
                Deal of the day
              </span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '300px',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0',
              width: 'fit-content',
            }}
          >
            <img
              className=""
              src={img7}
              alt="First slide"
              style={{width: '202.5px', height: '200px'}}
            />
            <div style={{display: 'flex', padding: '10px'}}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  backgroundColor: 'firebrick',
                  color: 'white',
                  padding: '4px 3px 3px',
                }}
              >
                Up to 40% off
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 'bold',
                  color: 'firebrick',
                  padding: '2px 5px',
                }}
              >
                Deal of the day
              </span>
            </div>
          </div>
        </Carousel>
      </Container>
      <Container style={{marginTop: '40px'}}>
        <h2 style={{fontWeight: 'bold'}}>{TODAYS_DEAL}</h2>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive1}
          ssr // means to render carousel on server-side.
          infinite
          autoPlay
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={5000}
          keyBoardControl
          customTransition=""
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={[
            'tablet',
            'mobile',
            'superLargeDesktop',
            'desktop',
          ]}
          // deviceType={this.props.deviceType}
          dotListClass=""
          itemClass=""
          // focusOnSelect={true}
        >
          <div style={{width: '100%', position: 'relative'}}>
            <img
              style={{width: '100%', height: '100%'}}
              className=""
              src={img8}
              alt="First slide"
            />
          </div>
          <div style={{width: '100%', position: 'relative'}}>
            <img
              style={{width: '100%', height: '100%'}}
              className=""
              src={img9}
              alt="First slide"
            />
          </div>
          <div style={{width: '100%', position: 'relative'}}>
            <img
              style={{width: '100%', height: '100%'}}
              className=""
              src={img8}
              alt="First slide"
            />
          </div>
          <div style={{width: '100%', position: 'relative'}}>
            <img
              style={{width: '100%', height: '100%'}}
              className=""
              src={img8}
              alt="First slide"
            />
          </div>
          <div style={{width: '100%', position: 'relative'}}>
            <img
              style={{width: '100%', height: '100%'}}
              className=""
              src={img9}
              alt="First slide"
            />
          </div>
        </Carousel>
      </Container>
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(null, mapDispatchToProps)(NewArrivals);
