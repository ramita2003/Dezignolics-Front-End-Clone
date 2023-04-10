import React from "react";
import "./Fifth.css";
import industry1 from "../images/ecm.png";
import industry2 from "../images/health.png";
import industry3 from "../images/grocery.png";
import industry4 from "../images/home.png";
import industry5 from "../images/finance.png";
import industry6 from "../images/cf.png";
import industry7 from "../images/edu.png";
import industry8 from "../images/tandt.png";
import industry9 from "../images/trans.png";

const Fifth = () => {
  return (
    <>
      <div className="industriesouter">
        <h1>INDUSTRIES WE SOLVE</h1>
        <h3>
          We focus on high quality and timely delivery of our Services. We
          provide cost effective and customized solutions.
        </h3>
        <div className="industriesinner">
          <div className="industry">
            <h2>ECommerce</h2>
            <img className="industryimg" src={industry1} alt="ECommerce" />
          </div>
          <div className="industry">
            <h2>Health Care</h2>
            <img className="industryimg" src={industry2} alt="ECommerce" />
          </div>
          <div className="industry">
            <h2>Grocery</h2>
            <img className="industryimg" src={industry3} alt="ECommerce" />
          </div>
          <div className="industry">
            <h2>Real Estate</h2>
            <img className="industryimg" src={industry4} alt="ECommerce" />
          </div>
          <div className="industry">
            <h2>Finance</h2>
            <img className="industryimg" src={industry5} alt="ECommerce" />
          </div>
          <div className="industry">
            <h2>Restaurant</h2>
            <img className="industryimg" src={industry6} alt="ECommerce" />
          </div>
          <div className="industry">
            <h2>Education</h2>
            <img className="industryimg" src={industry7} alt="ECommerce" />
          </div>
          <div className="industry">
            <h2>Tours & Travels</h2>
            <img className="industryimg" src={industry8} alt="ECommerce" />
          </div>
          <div className="industry">
            <h2>Transport</h2>
            <img className="industryimg" src={industry9} alt="ECommerce" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Fifth;
