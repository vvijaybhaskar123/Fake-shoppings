import React from 'react';
import fakeshopping from '../assests/Fakeshop.png';
import '../containers/imagecomponent.css'

const ImageComponent = () => {
  return (
    <div className="image-container"> 
      <div>
        <img src={fakeshopping} alt="FakeShop" />
      </div>
      <div className="filter-by">
        <button>Price</button>
        <button>Category</button>
        <button>Rating</button>
     
      </div>
      
    </div>
  );
};

export default ImageComponent;
