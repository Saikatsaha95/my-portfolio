import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import travelsite from "../../images/travelbuddy.PNG";
import bikerz from "../../images/bikerz.PNG";
import cancersite from "../../images/cancer-care.PNG";
import mindspace from "../../images/mindspace.png";
import "./MyProjects.css";

const MyProjects = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="container top-margin">
      <h1 className="gradient-text text-center fw-bold my-5">My Projects</h1>
      {/* ============================TraveBuddy======================== */}
      <div data-aos="fade-right" className="row gx-5 d-flex align-items-center">
        <div className="col-12 col-sm-12 col-md-5">
          <h3>TraveBuddy</h3>
          <h5>Travel agency landing page</h5>

          <h6>Technology Used:</h6>
          <button className="btn btn-outline-primary me-3 mb-2">React</button>
          <button className="btn btn-outline-primary me-3 mb-2">
            React Router
          </button>
          <button className="btn btn-outline-primary me-3 mb-2">
            Bootstrap
          </button>
          <button className="btn btn-outline-primary me-3 mb-2">
            Firebase
          </button>
          <button className="btn btn-outline-primary me-3 mb-2">Node</button>
          <button className="btn btn-outline-primary me-3 mb-2">Express</button>
          <button className="btn btn-outline-primary me-3 mb-2">Heroku</button>

          <div className="mt-3">
            <button className="btn link-btn px-3 fw-bold me-2 mb-2">
              {" "}
              <a
                href="https://travel-buddy-2624f.web.app/"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                {" "}
                Website{" "}
              </a>{" "}
            </button>
            <button className="btn link-btn px-3 fw-bold me-2 mb-2">
              {" "}
              <a
                href="https://github.com/Saikatsaha95/travelbuddy-client-side"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                {" "}
                Client Side Code{" "}
              </a>{" "}
            </button>
            <button className="btn link-btn px-3 fw-bold me-2 mb-2">
              {" "}
              <a
                href="https://github.com/Saikatsaha95/travelbuddy-server-side"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                {" "}
                Server Side Code{" "}
              </a>{" "}
            </button>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6">
          <img className="img-fluid" src={travelsite} alt="" />
        </div>
      </div>
      {/* =================================================================== */}

      {/* ============================Bikerz======================== */}
      <div className="top-margin">
        <div
          data-aos="fade-left"
          className="row gx-5 d-flex align-items-center my-5 "
        >
          <div className="col-12 col-sm-12 col-md-6">
            <img className="img-fluid rounded border" src={bikerz} alt="" />
          </div>
          <div className="col-12 col-sm-12 col-md-5 ">
            <h3>Bikerz</h3>
            <h5>Bike selling landing page</h5>

            <h6>Technology Used:</h6>
            <button className="btn btn-outline-primary me-3 mb-2">React</button>
            <button className="btn btn-outline-primary me-3 mb-2">
              React Router
            </button>
            <button className="btn btn-outline-primary me-3 mb-2">
              Material UI
            </button>
            <button className="btn btn-outline-primary me-3 mb-2">
              Firebase
            </button>
            <button className="btn btn-outline-primary me-3 mb-2">Node</button>
            <button className="btn btn-outline-primary me-3 mb-2">
              Express
            </button>
            <button className="btn btn-outline-primary me-3 mb-2">
              Heroku
            </button>

            <div className="mt-3">
              <button className="btn link-btn px-3 fw-bold me-2 mb-2">
                {" "}
                <a
                  href="https://bikerz-9340f.web.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  {" "}
                  Website{" "}
                </a>{" "}
              </button>
              <button className="btn link-btn px-3 fw-bold me-2 mb-2">
                {" "}
                <a
                  href="https://github.com/Saikatsaha95/bikerz-client-side"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  {" "}
                  Client Side Code{" "}
                </a>{" "}
              </button>
              <button className="btn link-btn px-3 fw-bold me-2 mb-2">
                {" "}
                <a
                  href="https://github.com/Saikatsaha95/bikerz-server-side"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  {" "}
                  Server Side Code{" "}
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* =================================================================== */}
      {/* ============================Mind Space======================== */}
      <div className="top-margin">
        <div
          data-aos="fade-right"
          className="row gx-5 d-flex align-items-center my-5 "
        >
          <div className="col-12 col-sm-12 col-md-5 ">
            <h3>MindSpace</h3>
            <h5>Meditation teaching landing page</h5>

            <h6>Technology Used:</h6>
            <button className="btn btn-outline-primary me-3 mb-2">React</button>
            <button className="btn btn-outline-primary me-3 mb-2">
              React Router
            </button>
            <button className="btn btn-outline-primary me-3 mb-2">
              Bootstrap
            </button>
            <button className="btn btn-outline-primary me-3 mb-2">
              Firebase
            </button>

            <div className="mt-3">
              <button className="btn link-btn px-3 fw-bold me-2 mb-2">
                {" "}
                <a
                  href="https://gifted-liskov-4ff795.netlify.app/home"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  {" "}
                  Website{" "}
                </a>{" "}
              </button>
              <button className="btn link-btn px-3 fw-bold me-2 mb-2">
                {" "}
                <a
                  href="https://github.com/Saikatsaha95/mindspace-client-side"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  {" "}
                  Client Side Code{" "}
                </a>{" "}
              </button>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6">
            <img className="img-fluid rounded border" src={mindspace} alt="" />
          </div>
        </div>
      </div>
      {/* =================================================================== */}
    </div>
  );
};

export default MyProjects;
