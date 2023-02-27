import React from "react";
import like from "../assets/images/like.png";

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
          <div className="Section3Row2">
            <img src={like} alt="" />
            <div className="Section3Column2">
              <h2>Backend Local</h2>
              <p>
                Backend environment variables like, keys for database, gitlab,
                digital ocean. etc. that devs need to work.
              </p>
            </div>
          </div>
        </div>
        {/* <div>
          <h1>Gangs</h1>
        </div> */}
      </div>
    </div>
  );
}

export default Section3;
