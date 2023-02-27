import React from "react";
import like from "../../assets/images/like.png";

function Section3List1(props) {
  console.log(props);
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

export default Section3List1;
