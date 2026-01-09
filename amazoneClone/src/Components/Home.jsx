import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";

import { GoChevronLeft } from "react-icons/go";
const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem("product")) || [];
    setProduct(storedProduct);
  }, []);

  return (
    <div style={{ backgroundColor: "#e3e6e6", height: "100%", width: "100%" }}>
      <div
        style={{
          height: "100%",
          backgroundColor: "white",
          margin: "0px 13.5% 0px 13.5%",
          // textAlign: "center",
        }}
      >
        {/* <div
          style={{
            width: "73%",
            display: "flex",
            position: "absolute",
            // transform: "translate(-50%,-50%)",
            overflow: "auto",
            border: "10px solid black",
            animationName: "spin",
            animationDuration: "3s",
            border: "none",
            boxShadow: "0px 10px 100px black ",

            // animation:"slide 3s infinite",

            // transform:"translateX(0%)",
          }}
        >
          {/* {/ <button style={{backgroundColor:"red", padding:"20px"}}><GoChevronLeft /></button> /} */}
        {/* <img src="Slider1.jpg" alt="image" />
          <img src="Slider2.jpg" alt="image" />
          <img src="Slider3.jpg" alt="image" />
          <img src="Slider4.jpg" alt="image" />
          <img src="Slider5.jpg" alt="image" />
          <img src="Slider6.jpg" alt="image" />
          <img src="Slider7.jpg" alt="image" /> */}
        {/* </div> */}
        {/* <div
          style={{
            backgroundColor: "white",
            width: "300px",
            // paddingTop: "400px",
            height: "auto",
            boxShadow: "0px 0px 100px black",
            // margin: "20px",
            display: "block",
            
            // gap:'20px',
          }}
        >
          <h2 style={{ paddingLeft: "20px" }}>Continue Shopping deals</h2>
          <img style={{ height: "110px" }} src="Shoes1.jpg" alt="image" />
          <img style={{ height: "110px" }} src="shoes2.jpg" alt="image" />
        </div> */}
        <div
          style={{
            // paddingTop: "265px",
            display: "block",
            flexWrap: "wrap",
            marginLeft: "40px",
          }}
        >
          {/* <h3>Results</h3>
          <p>
            Check each product page for other buying options. Price and other
            details may vary based on product size and colour.
          </p> */}
        </div>

        <div
          style={{
            padding: "40px",
            height: "auto",
            width: "auto",

            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
              flexBasis: "400px",
              flexGrow: "1",
              flexShrink: "1",
            }}
          >
            {product.length > 0 ? (
              product.map((product, index) => (
                <div
                  key={index}
                  style={{
                    border: "1px solid black",

                    borderRadius: "15px",
                  }}
                >
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.productName}
                      style={{
                        height: "280px",
                        width: "350px",
                        borderRadius: "15px",
                        objectFit: "contain",
                      }}
                    />
                  )}
                  <div style={{ padding: "20px" }}>
                    <h2>{product.productName}</h2>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <p>{product.about}+ baught in per month</p>
                    <p style={{ fontSize: "1.4rem" }}>${product.price}</p>
                    {/* {/ <h3 style={{color:"#1faaff"}}> <TiTick style={{color:"#ffa407",fontWeight:"bold", }} />prime</h3> /} */}
                    <img
                      style={{
                        height: "30px",
                        width: "70px",
                        marginLeft: "-10px",
                        marginBottom: "-5px",
                      }}
                      src="prime.jpg"
                      alt="image"
                    />{" "}
                    <br />
                    <p style={{ paddingTop: "0px" }}>FREE delivery At Home</p>
                    <p>Or Fastest Delivery</p>
                    <button
                      style={{
                        backgroundColor: "#ffd814",
                        padding: "10px",
                        width: "40%",
                        borderRadius: "35px",
                        border: "none",
                      }}
                      className="btn rounded-xl p-2 mt-2 bg-yellow-400 text-black-400"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No products available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
