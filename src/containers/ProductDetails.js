import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../App.css'

import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="product-details-container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="product-details">
          <div className="product-image">
            <img className="product-img" src={image} alt={title} />
          </div>
          <div className="product-info">
            <h1 className="product-title">{title}</h1>
            <h2 className="product-price">${price}</h2>
            <h3 className="product-category">{category}</h3>
            <p className="product-description">{description}</p>
            <div className="add-to-cart-button">Add to Cart</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
