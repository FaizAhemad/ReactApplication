import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useErrorHandler } from "react-error-boundary";
import { connect } from "react-redux";
import { setPageNotFoundComponent } from "../actions/general-actions";
import { defaultScrollPosition } from "../constants/constants";


function Contact({setPageNotFound,...props}) {
  const errorHandler = useErrorHandler();
  let count =0;
  useEffect(() => {
   
    setInterval(() => {
      try{
        count+=1;
        if(count==50){
          console.log(count)
          throw new Error('COunt is 3  now')
        }
      }
      catch(e){
        errorHandler(e)
      }

    }, 700);
    setPageNotFound(false);
    defaultScrollPosition();
  });
  
  return (
    <Container style={{ margin: '120px 0px 0px 0px' }}>Contact</Container>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPageNotFound: (value) => {
      dispatch(setPageNotFoundComponent(value));
    }
  };
};

export default connect(null,mapDispatchToProps)(Contact);