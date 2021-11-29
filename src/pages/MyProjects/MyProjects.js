import React from "react";
import travelsite from "../../images/travelbuddy.PNG";
import bikerz from "../../images/bikerz.PNG";
import cancersite from "../../images/cancer-care.PNG";

const MyProjects = () => {
  return (
    <div className="container">
      <div className="my-5">
        <h1 className="mb-5 fw-bold gradient-text text-center">My projects</h1>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img src={travelsite} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Developed with React, React Router, Bootstrap, Firebase, Node,
                  and Express Js.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={bikerz} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Developed with React, React Router, Material UI, Firebase,
                  Node, and Express Js.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={cancersite} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Developed with React, React Router, Bootstrap, Firebase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
