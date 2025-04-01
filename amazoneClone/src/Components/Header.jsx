import React, { useEffect, useState } from "react";

// import Home from "./Home";
import { GrLocation } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = () => {
 
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        width: "auto",
        height: "100%",
        backgroundColor: "#131921",
        // padding: "5px 0px 6px 10px",
        overflow: "hidden",
      }}
    >
      <Link to={"/"}>
        <img
          src="amazone.png"
          alt="image"
          style={{
            height: "55px",
            // padding: "3px 3px 3px 3px",
            paddingRight:"25px"
          }}
        />
      </Link>
      <div>
        <p
          style={{
            color: "white",
            fontSize: "13px",
            padding: "10px 0px 0px 25px ",
          }}
        >
          Deliver to
        </p>
        <h1
          style={{
            color: "white",
            fontSize: "16px",
            padding: "0px 4px 10px 10px",
          }}
        >
          <GrLocation />
          Chandigarh 160047
        </h1>
      </div>

      <select
        style={{
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "5px",
          backgroundColor: "#e6e6e6",
          width: "60px",
          display: "flex",
          padding: "10px 0px 10px 8px",
          margin: "5px 0px 5px 24px ",
          border: "none",
        }}
      >
        <option>All</option>
        <option>All Categories</option>
        <option>Alexa Skills</option>
        <option>Amazon Devices</option>
        <option>Amazon Fashion</option>
        <option>Amazon Fresh</option>
        <option>Amazon Pharmacy</option>
        <option>Appliances</option>
        <option>Apps & Games</option>
        <option>Audible Audiobooks</option>
        <option>Baby</option>
        <option>Beauty</option>
        <option>Books</option>
        <option>Car & Motorbike</option>
        <option>Clothing & Accessories</option>
        <option>Collectibles</option>
        <option>Computer & Accessories</option>
        <option>Deals</option>
        <option>Electronics</option>
        <option>Furniture</option>
        <option>Garden & Outdoors</option>
        <option>Gift Cards</option>
        <option>Grocery & Gourmet Foods</option>
      </select>
      <input
        type="search"
        placeholder="Search Amazon.in"
       
        style={{
          padding: "10px 0px 10px 10px",
          margin: "5px 0px 5px 0px ",
          display: "flex",
          justifyContent: "center",
          width: "1040px",
          border: "none",
          fontSize: "15px",
          backgroundColor: "white",
        }}
      />
      <button
        style={{
          backgroundColor: "#febd69",
          width: "45px",
          padding: "14.3px 10px 10px 13px",
          // margin: "5px 0px 5px 0px ",
          display: "flex",
          borderTopRightRadius: "5px",
          borderBottomRightRadius: "5px",
          border: "none",
        }}
      >
  
        <FaSearch style={{ font: "200px" }} />
      </button>

      <img
        src="./india flag.png"
        alt="image"
        style={{
          height: "15px",
          width: "18px",
          margin: "20px -24px 20px 29px",
        }}
      />
      <select
        // name="Langage"
        // id="multilang"
        style={{
          backgroundColor: "#131921",
          color: "#e6e6e6",
          fontSize: "14px",
          fontWeight: "bold",
          border: "0px",
          marginLeft: "25px",
        }}
      >
        <option>EN</option>
        {/* <option>Hindi</option>
        <option>Punjabi</option> */}
      </select>

      <Link
        to={"/signin"}
        style={{
          color: "white",
          margin: "10px 10px 10px 8px",
          padding: "0px 10px 0px 10px",
          fontSize: "12px",
          textDecoration: "none",
        }}
      >
        <p>Hello, sign in</p>

        <h3>
          Accounts & Lists
          <select
            style={{
              backgroundColor: "#131921",
              color: "white",
              border: "none",
            }}
          >
          </select>
        </h3>
      </Link>

  
      {/* <Link
        to={"/signup"}
     
        // style={{
        //   color: "white",
        //   margin: "10px 10px 10px 0px",
        //   padding: "0px 10px 0px 0px",
        //   fontSize: "12px",
        // }}
      >
        <p>Returns</p>
        <h3>& Orders</h3>
        </Link> */}
        <Link style={{color:"white"}} to={"/signup"}>
        Hello,<br />Sign Up
        </Link>
     
      <button style={{ backgroundColor: "#131921", border: "none" }}>
        <img
          style={{
            height: "45px",
            // padding: "5px 0px 5px 0px",
            // margin: "0px 0px 0px 0px",
          }}
          src="./addcart.png"
          alt="image"
        />
      </button>
    </div>
  );
};

export default Header;
