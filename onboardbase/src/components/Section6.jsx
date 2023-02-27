import React from "react";
import like from "../assets/images/like.png";

function Section6() {
  return (
    <div className="Section6">
      <div className="Section3Header">
        <h3>PRICING</h3>
        <h1>
          <span>Ready</span> to get started<span>?</span>
        </h1>
        <p>
          Boost your productivity. Our pricing is fair, transparent, and simple
          for every stage of your team.
        </p>
        <div className="paydayBox">
          <button className="annualBtn">
            Billed annually <div>25%</div>
          </button>
          <button className="annualBox">Billed monthly</button>
        </div>
      </div>
      <div className="Pricing">
        <div className="Price1">
          <button className="Scale">Scale</button>
          <h1>
            $6<span>/user/mo</span>
          </h1>
          <p>Peace of mind for you and your whole team as you build. </p>
          <div className="scaleRow">
            <img src={like} alt="" /> <h5>25 users,50 devices</h5>
          </div>
          <div className="scaleRow">
            <img src={like} alt="" /> <h5>15 projects</h5>
          </div>
          <div className="scaleRow">
            <img src={like} alt="" /> <h5>Env-in-build</h5>
          </div>
          <div className="scaleRow">
            <img src={like} alt="" /> <h5>Login credentials</h5>
          </div>
          <div className="scaleRow">
            <img src={like} alt="" />{" "}
            <h5>Email, Slack & Discord notifications</h5>
          </div>
          <div className="scaleRow">
            <img src={like} alt="" />{" "}
            <h5>
              Editable notifications <span>comming soon</span>
            </h5>
          </div>
          <div className="scaleRow">
            <img src={like} alt="" /> <h5>5 origanizations</h5>
          </div>
          <div className="scaleRow">
            <img src={like} alt="" /> <h5>SDKs</h5>
          </div>
          <div className="scaleRow">
            <img src={like} alt="" /> <h5>Integrations</h5>
          </div>
          <div className="BtnDiv">
            <button className="Btn1">Start 14 days trial</button>
          </div>
        </div>
        <div className="Price1">
          <button className="Scale">Scale</button>
          <h1>Custom</h1>
          <p>Peace of mind for you and your whole team as you build. </p>
          <div className="scaleRow">
            <img src={like} alt="" /> <h5>Unlimited users,Unlimited devices</h5>
          </div>
          <div className="scaleRow">
            <img src={like} alt="" /> <h5>Unlimited projects</h5>
          </div>
          <div className="scaleRow">
            <img src={like} alt="" /> <h5>Env-in-build</h5>
          </div>
          <div className="scaleRow">
            <img src={like} alt="" /> <h5>Login credentials</h5>
          </div>
          <div className="scaleRow">
            <img src={like} alt="" />{" "}
            <h5>Email, Slack & Discord notifications</h5>
          </div>
          <div className="scaleRow">
            <img src={like} alt="" />{" "}
            <h5>
              Editable notifications <span>comming soon</span>
            </h5>
          </div>
          <div className="scaleRow">
            <img src={like} alt="" /> <h5>Unlimited organizations</h5>
          </div>
          <div className="scaleRow">
            <img src={like} alt="" /> <h5>SDKs</h5>
          </div>
          <div className="scaleRow">
            <img src={like} alt="" /> <h5>Integrations</h5>
          </div>
          <div className="scaleRow">
            <img src={like} alt="" />{" "}
            <h5>
              Multi region <span>comming soon</span>
            </h5>
          </div>
          <div className="scaleRow">
            <img src={like} alt="" />{" "}
            <h5>
              Self-hosting <span>comming soon</span>
            </h5>
          </div>
          <div className="BtnDiv">
            <button>Contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
