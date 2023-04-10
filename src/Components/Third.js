import React from "react";
import "./third.css";
import workimg from "../images/hero2.png";
const Third = () => {
  // const style = {
  //   color: "red",

  // };
  return (
    <>
      <div className="work">
        <div className="left">
          <h1 style={{ marginRight: "auto" }}>OUR WORK PROCESS</h1>

          <div className="workinfo">
            <h4 id="w1">1. Prerequisite</h4>

            <h4>2. UI/UX Design</h4>

            <h4>3. Prototyping</h4>

            <h4>4. Development</h4>

            <h4>5. Quality Assurance</h4>

            <h4>6. Deployment & Support</h4>
          </div>
        </div>

        <div className="right">
          <img className="workimage" src={workimg} alt="Work Image" />
        </div>
      </div>
    </>
  );
};

export default Third;
