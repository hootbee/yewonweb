//src/menu/Home.jsx

import React from "react";
import About from "../home/About";
import Ceo from "../home/Ceo";
import News from "../home/News";
import AirStellar from "../home/AirStellar";
import Research from "../home/Research";
const Home = () => {
  return (
    <>
      <About></About>
      <Research></Research>
      <AirStellar></AirStellar>
      <News></News>
      <Ceo></Ceo>
    </>
  );
};

export default Home;
