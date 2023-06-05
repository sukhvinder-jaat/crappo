import React from "react";
import { Col, Row } from "react-bootstrap";
import profit_img from "../assets/Images/png/profit_img.png";
import grow_img from "../assets/Images/png/grow.png";
export const Grow = () => {
  return (
    <div className="bg_dark_blue py-5 position-relative">
      <span className="position-absolute end-0 bottom-0" data-aos="zoom-out-up">
        <img src={grow_img} alt="grow_img" />
      </span>
      <div className="my_container">
        <Row className="py-lg-5">
          <Col lg={6} xs={12} className="pb-lg-0 pb-4" data-aos="zoom-out-left">
            <p className="clr_white fw_700 fs_2xl mx_450 mb-0 mb-lg-1">
              Grow your profit and track your investments
            </p>
            <p className="clr_silver fs_sm fw_400 ff_rubic mx_400 py-3 mb-0 mb-lg-1">
              Use advanced analytical tools. Clear TradingView charts let you
              track current and historical profit investments.
            </p>
            <button className="fw_500 clr_white ff_rubic fs_md learn_btn rounded-pill border-0 bg_blue2">
              Learn More
            </button>
          </Col>
          <Col lg={6} xs={12} className="" data-aos="zoom-out-up">
            <img src={profit_img} className="w-100" alt="profit_img" />
          </Col>
        </Row>
      </div>
    </div>
  );
};
