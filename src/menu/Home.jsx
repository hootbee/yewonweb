//src/menu/Home.jsx

import React from "react";
import About from "../home/About";
import Nlp from "../home/Nlp";
import HealthCare from "../home/HealthCare";
import Environment from "../home/Environment";
import News from "../components/News";

const Home = () => {
  return (
    <>
      <About></About>
      <HealthCare></HealthCare>
      <Environment></Environment>
      <Nlp></Nlp>
      <News></News>
    </>
  );
};

export default Home;
