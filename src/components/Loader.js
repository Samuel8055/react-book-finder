import React from "react";
import preloader from "../assets/preloader.gif";

const Loader = () => {
  return (
    <div className='preloader'>
      <img src={preloader} alt='preloader' width='200px' height='135px' />
    </div>
  );
};

export default Loader;
