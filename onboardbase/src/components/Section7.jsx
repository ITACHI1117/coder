import React from "react";
import like from "../assets/images/like.png";

function Section7() {
  return (
    <div className="Section7">
      <div className="Section3Header">
        <h3>FAQ</h3>
        <h1>
          Frequently asked <span>questions.</span>
        </h1>
        <p>
          You have questions, and we know. We hope these help. You can also
          contact us for any specifics.
        </p>
      </div>
      <div className="Section7Column">
        <div className="Section5Row2">
          <img src={like} alt="" />
          <div className="Section5Column2">
            <h2>Can I use Onboardbase for free?</h2>
            <p>Yes, it's free for 14 days.</p>
          </div>
        </div>
        <div className="Section5Row2">
          <img src={like} alt="" />
          <div className="Section5Column2">
            <h2>Are there monthly and annual billing options?</h2>
            <p>
              There are monthly and annual billing options. Annual billing
              includes a ~25% discount compared to monthly billing.
            </p>
          </div>
        </div>
        <div className="Section5Row2">
          <img src={like} alt="" />
          <div className="Section5Column2">
            <h2>How can I get early access?</h2>
            <p>
              It's completely free and open to everyone. Can't wait to hear how
              you love using it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;
