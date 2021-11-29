import React from "react";
import "./Banner.css";
import img from "../../../images/my-pic.jpg";
import resume from "../../../resume/saikat-resume.pdf";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="content-area container">
        <div className="row gx-5 d-flex align-items-center">
          <div className="col-12 col-sm-12 col-md-5 p-5 me-3 ms-0">
            <img className="img-fluid  img-rounded" src={img} alt="" />
          </div>
          <div className="col-12 col-sm-12 col-md-6 text-area">
            <h5>Hi, This is</h5>
            <h1 className="fw-bold">Saikat Saha</h1>
            <h3 className="gradient-text fw-bold">
              I'm a&nbsp;
              <Typewriter
                loop
                cursor
                cursorStyle="_"
                typeSpeed={90}
                deleteSpeed={70}
                delaySpeed={1000}
                words={["Web Developer", "Js Enthusiast", "React Developer"]}
              />
            </h3>

            <button className="download-btn mt-4">
              <a className="fw-bold" href={resume} download>
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
