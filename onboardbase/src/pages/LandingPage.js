import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";

function LandingPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <Section2 />
      <Section3 />
    </>
  );
}

export default LandingPage;
