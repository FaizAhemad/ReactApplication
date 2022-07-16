import { useEffect } from "react";
import { defaultScrollPosition } from "../constants/constants";

function Blogs() {

  useEffect(() => {
    defaultScrollPosition();
  }, []);

  return (
    <div className='componentContainer'></div>
  )
};

export default Blogs;