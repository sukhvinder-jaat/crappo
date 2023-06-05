import React from "react";
import { Col, Row } from "react-bootstrap";
import detail from "../assets/Images/png/detailed.png";
export const Detailed = () => {
  return (
    <div className="bg_dark_blue py-lg-5 position-relative">
      <img
        src={detail}
        alt="detail"
        data-aos="zoom-in-right"
        className="w-50 position-absolute start-0 mh_480 d-none d-xl-block"
      />
      <div className="my_container py-lg-5 mb-xxl-3">
        <Row className="pb-xxl-5 flex-column-reverse flex-lg-row align-items-center">
          <Col lg={6} xs={12} data-aos="zoom-in-right">
            <img src={detail} alt="detail" className="w-100 d-xl-none" />
          </Col>
          <Col
            lg={6}
            xs={12}
            className="ps-lg-5 pb-lg-5 pb-4 mb-lg-5"
            data-aos="zoom-in-right"
          >
            <p className="clr_white fw_700 fs_2xl ff_rubic mb-0 mb-lg-1 pt-4 pt-lg-0">
              Detailed Statistics
            </p>
            <p className="clr_silver fs_sm fw_400 ff_rubic mx_400 py-3 mb-0 mb-lg-1">
              View all mining related information in realtime, at any point at
              any location and decide which polls you want to mine in.
            </p>
            <button className="fw_500 clr_white ff_rubic fs_md learn_btn rounded-pill border-0 bg_blue2">
              Learn More
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
};
