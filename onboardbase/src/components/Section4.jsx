import React from "react";
import ShareApi2 from "../Data/ShareApi2";
import Section4List1 from "./ListItems/Section4List1";
import Section4List2 from "./ListItems/Section4List2";

function Section4() {
  return (
    <div className="Section4">
      <div className="Section3Header">
        <h3>The onboardbase way</h3>
        <h1>
          <span>Safer,</span> faster, and smarter.
        </h1>
        <p>
          Onboardbase combines the best developer experience with an obsessive
          focus on performance and security.
        </p>
      </div>
      <div className="Section3Row">
        <div className="section3list2">
          <Section4List1 />
        </div>
        <div className="Section3Column">
          {ShareApi2.map((item) => {
            return <Section4List2 key={item.id} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Section4;
