import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";

import "../App.css";

const ProductComponent = () => {
  const [data, setData] = useState([]);
  const products = useSelector((state) => state.allProducts.products);

  useEffect(() => {
    setData(products);
  }, [products]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <i
            key={i}
            className="star fas fa-star"
            style={{ color: "goldenrod" }} 
          ></i>
        ); 
      } else {
        stars.push(
          <i
            key={i}
            className="star far fa-star"
            style={{ color: "goldenrod" }} 
          ></i>
        ); 
      }
    }
    return stars;
  };
  return (
    <div>
   <h1 style={{ marginLeft: '150px',marginBottom:'30px' }}>Products For You</h1>
    <div className="product-cards">
      {data.length > 0 ? (
        data.map((item, index) => {
          const {
            category,
            description,
            id,
            image,
            title,
            price,
            rating,
          } = item;
          return (
           
            
            
            <div className="product-card" key={index}>
              <Link to={`/product/${id}`}>
                <div className="image">
                
                  <img src={image} alt={title} />
                </div>
                <div className="content">
                  <div className="header">{title}</div>
                  <div className="meta-category"> {category}</div>
                  {/* <div className="meta">Description: {description}</div> */}
                  <div className="meta-price">${price}</div>
                  <div className="meta">
                  {renderStars(rating.rate)}
                  </div>
                </div>
              </Link>
            </div>
            
          );
        })
      ) : (
        <p>...</p>
      )}
    </div>
    </div>
  );
};

export default ProductComponent;
