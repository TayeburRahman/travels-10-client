import React, { useEffect } from "react";
import Footer from "../Shared/Footer/Footer";
import Packages from "./Packages/Packages";
import TourHeader from "./TourHeader/TourHeader";

const Tour = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TourHeader />
      <Packages />
      <Footer />
    </>
  );
};

export default Tour;
