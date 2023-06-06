import React from "react";
import { Row, Col } from "react-bootstrap";
import choose_img from "../assets/Images/png/choose.png";
import why_bg from "../assets/Images/png/why_bg.png";
import why_bg_1 from "../assets/Images/png/why_bg_1.png";
import why_bg_2 from "../assets/Images/png/why_bg_2.png";
const Choose = () => {
  return (
    <section className="bg_blue py-xl-5 position-relative overflow-hidden">
      <span className="position-absolute end-0 top-0">
        <img src={why_bg} alt="why_bg" />
      </span>
      <span className="position-absolute end-0 bottom-0">
        <img src={why_bg_1} alt="why_bg_1" />
      </span>
      <span className="position-absolute why_bg_2 bottom-0">
        <img src={why_bg_2} alt="why_bg_2" />
      </span>
      <div className="my_container py-lg-5 pb-5 mt-xl-5">
        <Row className="d-flex flex-xl-row text-start">
          <Col lg={7} xs={12} className="mt-4 pe-xl-5" data-aos="fade-up-right">
            <img
              className="hero_img_width"
              src={choose_img}
              alt="choose_img "
            />
          </Col>
          <Col
            lg={5}
            xs={12}
            className="d-flex align-items-start flex-column mt-4 mt-xl-0"
            data-aos="fade-left"
          >
            <p className="fw_700 ff_rubic fs_3xl clr_white">
              Why you should choose CRAPPO
            </p>
            <p className="fw_400 ff_rubic fs_sm clr_silver mx_400 pt-1">
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
            </p>
            <button className="fw_500 ff_rubic fs_md clr_white free_btn mt-3 all_btn overflow-hidden position-relative">
              Learn More
            </button>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Choose;
