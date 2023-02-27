import React from "react";
import like from "../../assets/images/like.png";

function Section4List2(props) {
  return (
    <div className="Section3Row2">
      <img src={like} alt="" />
      <div className="Section3Column2">
        <h2>{props.header}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Section4List2;
