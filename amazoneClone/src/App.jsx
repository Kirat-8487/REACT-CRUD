import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Signup from "./Components/Signup";
import All from "./Components/All";
import NewReleses from "./Components/NewReleses";
import Header from "./Components/Header";
import SignIn from "./Components/SignIn";
import Mymember from "./Components/Mymember"

const App = () => {
  return (
    <Router>
      <Header/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pr" element={<Products/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/al" element={<All/>}/>
        <Route path="/nw" element={<NewReleses/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/mymember" element={<Mymember/>}/>
        
      </Routes>
    </Router>
    // <div>
    //   <SignIn></SignIn>
    // </div>
  );
};

export default App;
