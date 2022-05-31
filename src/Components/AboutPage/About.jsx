import React, { useEffect } from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "./AboutHeader/Header";
import BoatAndSea from "./BoatAndSea/BoatAndSea";
import Counter from "./Counter/Counter";
import FAQ from "./FAQ/FAQ";
import KnowUs from "./KnowUs/KnowUs";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <KnowUs />
      <FAQ />
      <BoatAndSea />
      <Counter />
      <Footer />
    </div>
  );
};

export default About;
