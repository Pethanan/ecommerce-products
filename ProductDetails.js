import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  return (
    <>
      <h1>ProductDetails</h1>
      <h2>{params.productId}</h2>
    </>
  );
};

export default ProductDetails;
