import React, { useEffect } from "react";
import Footer from "../Shared/Footer/Footer";
import ContactForm from "./ContactForm/ContactForm";
import ContactHeader from "./ContactHeader/ContactHeader";
import GetTouch from "./GetTouch/GetTouch";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ContactHeader />
      <GetTouch />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
