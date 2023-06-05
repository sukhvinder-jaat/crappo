import React from "react";
import { Col, Row } from "react-bootstrap";
import bit from "../assets/Images/svg/bitcoin_logo.svg";
export const Trade = () => {
  return (
    <div className="bg_trade">
      <div className="my_container">
        <div className="trade_box p-md-5 px-4 py-4" data-aos="flip-down">
          <p className="ff_rubic fw_500 fs_sm clr_blue2">
            ESTIMATED 24 HOUR REVENUE:
          </p>
          <p className="ff_rubic fw_700 fs_2xl clr_black">
            0.055 130 59 ETH <span className="clr_blue2">($1275)</span>
          </p>
          <p className="ff_rubic fw_400 fs_sm clr_black">
            Revenue will change based on mining difficulty and Ethereum price.
          </p>
        </div>
        <div
          className="d-flex justify-content-lg-center justify-content-start pt-5"
          data-aos="zoom-in"
        >
          <p className="ff_rubic mb-0 fw_700 text-lg-center text-start fs_3xl clr_blue mx_703">
            Trade securely and market the high growth cryptocurrencies.
          </p>
        </div>
      </div>
    </div>
  );
};
