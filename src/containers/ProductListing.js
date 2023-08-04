import React, { useEffect,  } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import '../App.css'
import {setProducts} from '../redux/actions/productsActions'
import ImageComponent from "./ImageComponent";
import ProductComponent from './ProductComponent'

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products)
  const dispatch = useDispatch();

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     });
  //   dispatch(setProducts(response.data));
  // };

  useEffect(() => {
    async function fetchProducts(){
      const response= await axios.get("https://fakestoreapi.com/products")
      dispatch(setProducts(response.data))
    }

    fetchProducts()
  },[]);

  
  return (
    <div >
      <ImageComponent/>
      <ProductComponent /> 
    </div>
  );
};

export default ProductPage;
