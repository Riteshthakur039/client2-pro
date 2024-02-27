import React from "react";
import coin from "../../assets/images/coin.jpeg";
import "./style.css";

function GavaCoins() {
  return (
    <div className="containers">
      <div className="header">
        <div className="headerText">
          BUYING MORE FROM YOUR FARMER IS REWARDING... EARN WHILE YOU SHOP!
          <br />
          <p>
            {" "}
            FREE GAVA COINS & ONLY FOR YOU DISCOUNTS, EVERY TIME YOU SHOP UNDER
            YOUR FARMERS LOYALTY PROGRAMME. 1 GAVA COIN = 1 RUPEE
          </p>
        </div>
        <div className="headerButtons">
          <button className="button">Join Now</button>
          <button className="button">Sign In</button>
        </div>
      </div>
      <img className="illustration" src={coin} alt="Gava Coins Illustration" />
      <div className="content">
        <div className="contentTitle">How It Works?</div>
        <div className="contentSteps">
          <div className="step">
            <div className="stepNumber">1</div>
            <div className="stepText">Create an account on our store</div>
          </div>
          <div className="step">
            <div className="stepNumber">2</div>
            <div className="stepText">Earn GAVA Coins for shopping</div>
          </div>
          <div className="step">
            <div className="stepNumber">3</div>
            <div className="stepText">Redeem GAVA Coins for discounts</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GavaCoins;
