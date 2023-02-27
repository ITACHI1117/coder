import React from "react";
import like from "../../assets/images/like.png";

function Section5List1(props) {
  return (
    <div className="Section5Row2">
      <img src={like} alt="" />
      <div className="Section5Column2">
        <h2>{props.header}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Section5List1;
