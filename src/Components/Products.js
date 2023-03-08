import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from './Footer'
import {AiOutlineShoppingCart} from "react-icons/ai"
import {BsFillLightningFill} from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button  from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate=useNavigate();
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log("params are ",params.id);
  const val = () => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSingleProduct(data);
        setLoading(false);
      });
  };
  useEffect(() => {
    return val();
  }, []);

  if (loading) {
    return <h1 id="loading2">Loading...</h1>;
  }
  return (
    <>
      <Header />
      {loading?<h1 id="loading2">Loading...</h1>:<>
      <Link to={"/"}>
        <p style={{margin:'5px'}}>Back To Shopping</p>
      </Link>
      <div id="product-details">
        <div className="imgs">
          
          <img
            src={singleProduct.thumbnail}
            alt="thumbnail"
            width={350}
            height={350}
          /><br/>
         
        </div>
        <div id="items">
          <h1 style={{ color: "GrayText" }}>{singleProduct.title}</h1>
          <h5>
            <span style={{ color: "cadetblue" }}>Rating</span> :{" "}
            <span style={{ color: "crimson" }}>{singleProduct.rating}</span>
          </h5>
          <h3>
            Brand :{" "}
            <span style={{ color: "deepskyblue" }}>{singleProduct.brand}</span>
          </h3>
          <h2>
            <span style={{ color: "GrayText" }}>Price</span> :{" "}
            <span style={{ color: "darkgreen" }}>${singleProduct.price}</span>
          </h2>
          <h3>
            <span style={{ color: "black" }}>Discount</span> :{" "}
            <span style={{ color: "darkred" }}>
              {" "}
              {singleProduct.discountPercentage}%
            </span>
          </h3>
          <h4>
            Products Left :
            <span style={{ color: "orangered" }}>{singleProduct.stock}</span>
          </h4>
          <p
            style={{
              color: "GrayText",
              fontWeight: "600",
              fontSize: "19px",
              width: "400px",
            }}
          >
            <span style={{ color: "black" }}>Description</span> :
            {singleProduct.description}
          </p>
          <button className="btnc" onClick={()=>navigate('/payment')}><BsFillLightningFill/>Buy Now</button>
        </div>
      </div>
      <Footer/>
      </>}
      
    </>
  );
};
export default Products;
