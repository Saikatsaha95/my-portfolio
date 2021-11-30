import React from "react";
import ContactMe from "../../ContactMe/ContactMe";
import MyProjects from "../../MyProjects/MyProjects";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <MyProjects></MyProjects>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
