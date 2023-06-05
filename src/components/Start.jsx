import React from "react";
import { Row, Col } from "react-bootstrap";
import shadow_1 from "../assets/Images/png/start_shadow_1.png";
import bit from "../assets/Images/png/start_bit_shadow.png";
import start from "../assets/Images/png/start.png";
const Start = () => {
  return (
    <section className="start_box py-5 position-relative">
      <span className="position-absolute star_1">
        <img src={start} alt="" />
      </span>
      <span className="position-absolute star_2">
        <img src={start} alt="" />
      </span>
      <div className="my_container py-5">
        <div
          className="start_input rounded-4 p-sm-5 p-2 overflow-hidden position-relative"
          data-aos="flip-up"
        >
          <span className="position-absolute top-0 start-0 ms-4">
            <img src={shadow_1} alt="shadow_1" />
          </span>
          <span className="position-absolute bottom-0 end-0">
            <img src={bit} alt="shadow_1" />
          </span>
          <Row className="align-items-center">
            <Col lg={5} className="position-relative index_5">
              <p className="fw_700 ff_rubic fs_2xl clr_white">
                Start mining now
              </p>
              <p className="fw_400 ff_rubic fs_sm clr_white me-5 pe-4">
                Join now with CRAPPO to get the latest news and start mining now
              </p>
            </Col>
            <Col lg={7} className="position-relative index_5">
              <div className="d-flex flex-column flex-sm-row align-items-lg-center mt-3 mt-lg-0">
                <input
                  className="w-100 place_clr fw_400 ff_rubic fs_sm clr_white start_input me-2 me-sm-5 pb-2"
                  type="email"
                  placeholder="Enter your email"
                />
                <div>
                  <button className="fw_500 ff_rubic fs_md clr_blue start_btn mt-3">
                    Subscribe
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Start;
