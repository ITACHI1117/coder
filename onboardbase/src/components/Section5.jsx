import React from "react";
import Security from "../Data/Security";
import Section5List1 from "./ListItems/Section5List1";

function Section5() {
  return (
    <div className="Section5">
      <div className="Section3Header">
        <h3>SECURITY</h3>
        <h1>
          <span>Enterprise</span>grade.
        </h1>
        <p>
          We use a variety of techniques to ensure the security of the data
          entrusted to us by our customers.
        </p>
      </div>
      <div className="Section5Column">
        {Security.map((item) => {
          return <Section5List1 key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Section5;
