import React from "react";
import "./Second.css";
import sideimg from "../images/hero.png";
import about from "../images/aboutimg.png";
import s1img from "../images/service1.gif";
import s2img from "../images/service2.gif";
import s3img from "../images/service3.gif";
import s4img from "../images/service4.gif";
import s5img from "../images/service5.gif";
import s6img from "../images/service6.gif";
import workimg from "../images/hero2.png";
import Third from "./Third";
import Fifth from "./Fifth";

const Second = () => {
  return (
    <>
      <div className="secondouter">
        <div className="secondinner1">
          <h1>Simple Solutions For Complex Connections</h1>
          <h4>
            We Transform Your Business Into Reality Through Research, Strategy,
            Innovation & Design!
          </h4>
          <div className="buttons">
            <button id="quotebtn">Get a Quote</button>
            <button id="contactbtn">Contact Us</button>
          </div>
        </div>
        <div className="secondinner2">
          <img className="sideimg" src={sideimg} alt="dezignolics" />
        </div>
      </div>

      <div className="about">
        <div className="aboutinner1">
          <p>ABOUT DEZIGNOLICS</p>
        </div>
        <div className="aboutinner2">
          <div className="abtimg">
            <img className="aboutimage" src={about} alt="About" />
          </div>
          <div className="aboutinner3">
            <div className="abttxt">
              <p>
                Dezignolics Pvt. Ltd., a software development company based in
                Pune, India, efficiently delivers creative communications,
                interactive web solutions, and digital marketing services. We
                execute assignments of various complexities for clients across
                the globe. Founded in 2012 as a creative website development
                company based in Mumbai, India.
              </p>
            </div>
            <div>
              <button id="aboutusbtn">MORE ABOUT US</button>
            </div>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="sec1">
          <p>OUR SERVICES</p>
        </div>
        <div className="sec2">
          <div className="div1">
            <img className="gif" src={s1img} alt="Web Development GIF" />
            <div className="s1title">
              <p>Web Development</p>
            </div>
            <div className="s1description">
              Dezignolics is a software IT Company having specialized in
              creating multi-level Enterprise-categorize web solution to meet
              various corporate needs.
            </div>
          </div>
          <div className="div1">
            <img className="gif" src={s2img} alt="Web Development GIF" />
            <div className="s1title">
              <p>Software Development</p>
            </div>
            <div className="s1description">
              Dezignolics is a software IT Company having specialized in
              creating multi-level Enterprise-categorize web solution to meet
              various corporate needs.
            </div>
          </div>
          <div className="div1">
            <img className="gif" src={s3img} alt="Web Development GIF" />
            <div className="s1title">
              <p>App Development</p>
            </div>
            <div className="s1description">
              Deep dive into the world of mobility solutions with your unique
              ideas modified into incredible apps for your business needs.
            </div>
          </div>
          <div className="div1">
            <img className="gif" src={s4img} alt="Web Development GIF" />
            <div className="s1title">
              <p>DIGITAL MARKETING</p>
            </div>
            <div className="s1description">
              A sure-shot way of making your social media presence felt as well
              as augmenting your business to flourish.
            </div>
          </div>
          <div className="div1">
            <img className="gif" src={s5img} alt="Web Development GIF" />
            <div className="s1title">
              <p>GRAPHIC DESIGNING</p>
            </div>
            <div className="s1description">
              We cater all the segments of Branding, Video Making, Print &
              Design are what companies need to strengthen their brand image
              ideals to make a statement through graphic design.
            </div>
          </div>
          <div className="div1">
            <img className="gif" src={s6img} alt="Web Development GIF" />
            <div className="s1title">
              <p>IT SOLUTIONS</p>
            </div>
            <div className="s1description">
              Innovation is the name of the game and we look out for the most
              inventive solutions for IT problems.
            </div>
          </div>
        </div>
      </div>
      {/* 3rd par */}

      <Third />
      <Fifth />
    </>
  );
};

export default Second;
