import React from "react";
import Header from "./Header";

function Hero() {
  return (
    <div>
      <Header />
      <div className="Hero">
        <div className="commentBox">
          <p>Safer, faster and smarter</p>
          <div className="arrowDown"></div>
        </div>
        <div className="HeroTexts">
          <h1>Create, Code, and Ship.</h1>
          <h1 className="blueText">We'll handle the security.</h1>
          <p>
            Onboardbase manages app secrets and credentials securely with team
            work and contractors in mind.
          </p>
          <div className="buttons">
            <button className="blueBtn">Start 14 days trial</button>
            <button>Documentation</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
