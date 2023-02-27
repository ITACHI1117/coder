import React from "react";
import shareApi from "../Data/ShareApi";
import Section3List1 from "./ListItems/Section3List1";
import Section3List2 from "./ListItems/Section3List2";

function Section3() {
  return (
    <div className="Section3">
      <div className="Section3Header">
        <h3>USECASES</h3>
        <h1>
          Share <span>API Keys,</span> and credentials.
        </h1>
        <p>
          Onboardbase ensures teams do not share app secrets and credentials
          poorly or on mediums like Slack or email.
        </p>
      </div>
      <div className="Section3Row">
        <div className="Section3Column">
          {shareApi.map((item) => {
            return <Section3List1 key={item.id} {...item} />;
          })}
        </div>
        <div className="section3list2">
          <Section3List2 />
        </div>
      </div>
    </div>
  );
}

export default Section3;
