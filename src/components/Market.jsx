import React from "react";
import { Col, Row } from "react-bootstrap";
import bit from "../assets/Images/svg/bitcoin_logo.svg";
import trade from "../assets/Images/svg/bit_trade.svg";
import market_bg from "../assets/Images/png/market_bg.png";
export const Market = () => {
  return (
    <div className="bg_dark_blue py-5 overflow-hidden">
      <div className="my_container py-5 position-relative">
        <span className="position-absolute market_bg">
          <img src={market_bg} alt="market_bg" />
        </span>
        <div className="d-flex justify-content-lg-center">
          <p className="clr_white fw_700 ff_rubic pb-4 fs_3xl mx_750 text-lg-center text-start">
            Market sentiments, portfolio, and run the infrastructure of your
            choice
          </p>
        </div>
        <Row className="py-lg-5">
          <Col lg={6} xs={12} className="pb-lg-0 pb-4" data-aos="zoom-in-down">
            <p className="clr_white fw_700 fs_2xl mb-0 mb-lg-1">Invest Smart</p>
            <p className="clr_silver fs_sm fw_400 ff_rubic mb-0 mb-lg-1 mx_400 py-3">
              Get full statistic information about the behaviour of buyers and
              sellers will help you to make the decision.{""}
            </p>
            <button className="fw_500 clr_white ff_rubic fs_md learn_btn rounded-pill border-0 bg_blue2">
              Learn More
            </button>
          </Col>
          <Col
            lg={6}
            xs={12}
            className="position-relative pb-5"
            data-aos="zoom-in-left"
          >
            <div className="bg_bit_box p-5 rounded-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <span>
                    <img className="wh_40" src={bit} alt="bit" />
                  </span>
                  <div className="ps-3">
                    <span className="d-flex align-items-center">
                      <p className="mb-0 ff_inter fw_700 clr_white fs_xl ">
                        Bitcoin
                      </p>
                      <p className="mb-0 ff_inter fw_600 fs_sm opacity_07 clr_dark_silver ps-2">
                        BTC
                      </p>
                    </span>
                    <p className="ff_inter fw_700 fs_xsm clr_dark_silver opacity_07">
                      0.00080 BTC
                    </p>
                  </div>
                </div>
                <p className="ff_inter fw_500 fs_xsm clr_sky">+125%</p>
              </div>
              <img src={trade} alt="trade" className="w-100" />
            </div>
            {/* increase box */}
            <div className="position-relative">
              <div className="increase_box increase_box_1 position-absolute">
                <p className="mb-0 clr_white fw_600 ff_inter fs_lg ">
                  Increase in Trade
                </p>
                <p className="mb-0 clr_white fw_700 ff_inter fs_xl py-3">
                  +75%{""}
                  <svg
                    width="14"
                    height="12"
                    className="ms-2"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7102 5.2899L7.71019 0.289896C7.61508 0.198856 7.50294 0.127491 7.38019 0.0798963C7.13672 -0.0201217 6.86365 -0.0201217 6.62019 0.0798963C6.49743 0.127491 6.38529 0.198856 6.29019 0.289896L1.29019 5.2899C1.19695 5.38314 1.12299 5.49383 1.07253 5.61565C1.02207 5.73747 0.996094 5.86804 0.996094 5.9999C0.996094 6.2662 1.10188 6.52159 1.29019 6.7099C1.47849 6.8982 1.73388 7.00399 2.00019 7.00399C2.26649 7.00399 2.52188 6.8982 2.71019 6.7099L6.00019 3.4099V10.9999C6.00019 11.2651 6.10554 11.5195 6.29308 11.707C6.48062 11.8945 6.73497 11.9999 7.00019 11.9999C7.2654 11.9999 7.51976 11.8945 7.70729 11.707C7.89483 11.5195 8.00019 11.2651 8.00019 10.9999V3.4099L11.2902 6.7099C11.3831 6.80363 11.4937 6.87802 11.6156 6.92879C11.7375 6.97956 11.8682 7.0057 12.0002 7.0057C12.1322 7.0057 12.2629 6.97956 12.3848 6.92879C12.5066 6.87802 12.6172 6.80363 12.7102 6.7099C12.8039 6.61693 12.8783 6.50633 12.9291 6.38447C12.9798 6.26261 13.006 6.13191 13.006 5.9999C13.006 5.86789 12.9798 5.73718 12.9291 5.61532C12.8783 5.49346 12.8039 5.38286 12.7102 5.2899Z"
                      fill="#FD8589"
                    />
                  </svg>
                </p>
                <p className="mb-0 ff_inter fw_400 fs_sm clr_light_grey">
                  Sell option
                </p>
              </div>
              <div className="increase_box py-3 position-absolute side_box_posistion d-none d-sm-block">
                <p className="text-center mb-0 clr_white fw_700 ff_inter fs_xl">
                  $15.32
                </p>
                <p className="mb-0 text-center ff_inter fw_400 fs_sm clr_light_grey">
                  Price in dollar
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
