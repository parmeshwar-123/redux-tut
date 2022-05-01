import React from "react";
import i1 from "../img/i1.jpg";
import "../App.css";

const Home = () => {
  return (
    <div>
      <div className='addToCart'>
       <div className="cartWrapper">
       <img src={i1} alt="" />
        <p className="items">7</p>
       </div>
      </div>
      <h1>Home Component.</h1>
      <div className="container">
        <p>1</p>
        <h3>Vivo 2065</h3>
        <div>
          <img src={i1} className="image" />
        </div>
        <p>1</p>
        <p>14500</p>
        <button type="button" className="addToCartButton">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Home;
