//src/menu/Home.jsx

import React from "react";
import About from "../home/About";
import Nlp from "../home/Nlp";
import HealthCare from "../home/HealthCare";
import Environment from "../home/Environment";
import Ceo from "../home/Ceo";
import News from "../home/News";
const Home = () => {
  return (
    <>
      <About></About>
      <HealthCare></HealthCare>
      <Environment></Environment>
      <Nlp></Nlp>
      <News></News>
      <Ceo></Ceo>
    </>
  );
};

export default Home;
