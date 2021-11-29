import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../../images/about-img.png";
import "./AboutMe.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="aboutme-section my-5 container">
      <div data-aos="fade-up">
        <h1 className="gradient-text fw-bold text-center mb-5">About me</h1>
      </div>

      <div>
        <div className="row gx-2 d-flex align-items-center">
          <div className="col-12 col-sm-12 col-md-4">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="mx-auto"
            >
              <img className="img-fluid img-size  mb-3 " src={img} alt="" />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <div
              className="ms-5"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
            >
              <h5 className="aboutme-content">
                I am an innovative and aspiring Front-end Developer. I love to
                develop beautiful & dynamic websites. I have expertise in HTML5,
                CSS3, JavaScript, and React Js. I also have knowledge about Git,
                GitHub, Node js, Express js, CRUD operations, and Mongo DB. I am
                familiar with Redux and Next js as well.{" "}
              </h5>
              <hr />
              <div className="row gx-5">
                <div className="col-12 col-sm-12 col-md-6">
                  <h6>
                    <span className="left-side-text fw-bold">Age</span>: 27
                  </h6>
                  <h6>
                    <span className="left-side-text fw-bold">
                      Qualification
                    </span>
                    : BSc in EEE
                  </h6>
                  <h6>
                    <span className="left-side-text fw-bold">Language</span>:
                    Bangla, English
                  </h6>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                  <h6>
                    <span className="text-danger fw-bold">Address</span>: Dhaka,
                    Bangladesh
                  </h6>
                  <h6>
                    <span className="text-danger fw-bold">Email</span>:
                    saikatsaha011@outlook.com
                  </h6>
                  <h6>
                    <span className="text-danger fw-bold">Phone</span>:
                    +8801676748483
                  </h6>
                </div>
                <div className="my-5 ">
                  <i className="fab fa-facebook-square fa-3x me-3 left-side-text"></i>
                  <i className="fab fa-instagram-square fa-3x me-3 left-side-text"></i>
                  <i className="fab fa-github-square fa-3x left-side-text"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
