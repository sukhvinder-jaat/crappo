import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BiMenu } from "react-icons/bi";
import { Nav, Row, Col } from "react-bootstrap";
import image_side from "../assets/Images/png/hero_img.png";
import back_big from "../assets/Images/svg/hero_back_big.svg";
import bg_small from "../assets/Images/svg/small_bg.svg";

const Hero = () => {
  const [first, setfirst] = useState(true);
  function clickshow() {
    setfirst(!first);
  }
  if (!first) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <section className="bg_blue">
      <div className="py-sm-5 py-2">
        <div className="my_container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center ">
              <span className="d-flex align-items-center pointer">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
                    fill="white"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M18.8424 28.0463C14.9125 27.4707 11.8965 24.0828 11.8965 19.9891C11.8965 15.8954 14.9125 12.5075 18.8424 11.9322V7.69238C12.5856 8.29084 7.69238 13.5677 7.69238 19.9891C7.69238 26.4104 12.5856 31.687 18.8424 32.2858V28.0463Z"
                    fill="white"
                  />
                  <path
                    d="M26.9983 12L26.8892 12.3711V23.1393L26.9983 23.2483L31.9968 20.2937L26.9983 12Z"
                    fill="white"
                  />
                  <path
                    d="M26.9985 12L22 20.2937L26.9985 23.2483V18.0217V12Z"
                    fill="white"
                  />
                  <path
                    d="M26.9985 24.8745L26.937 24.9495V28.7853L26.9985 28.965L32 21.9214L26.9985 24.8745Z"
                    fill="white"
                  />
                  <path
                    d="M26.9985 28.9651V24.8745L22 21.9214L26.9985 28.9651Z"
                    fill="white"
                  />
                  <path
                    d="M26.9985 23.248L31.9969 20.2934L26.9985 18.0215V23.248Z"
                    fill="white"
                  />
                  <path
                    d="M22 20.2934L26.9984 23.248V18.0215L22 20.2934Z"
                    fill="white"
                  />
                </svg>
                <p className="mb-0 ps-3 ff_inter fw_600 fs_md clr_white">
                  CRAPPO
                </p>
              </span>
            </div>
            <div>
              <ul
                className={
                  first
                    ? "nav_show d-flex gap-5 align-items-center mb-0"
                    : "nav_show d-flex showw gap-5 mb-0 align-items-center ps-0"
                }
              >
                <li>
                  <a
                    className="mb-0 ff_rubic fw_400 fs_sm clr_white position-relative hover_line"
                    href="#"
                    onClick={() => setfirst(true)}
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    className="mb-0 ff_rubic fw_400 fs_sm clr_white position-relative hover_line"
                    href="#"
                    onClick={() => setfirst(true)}
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    className="mb-0 ff_rubic fw_400 fs_sm clr_white position-relative hover_line"
                    href="#"
                    onClick={() => setfirst(true)}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="mb-0 ff_rubic fw_400 fs_sm clr_white position-relative hover_line "
                    href="#"
                    onClick={() => setfirst(true)}
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    className="mb-0 ff_rubic fw_500 fs_sm clr_white position-relative hover_line"
                    href="#"
                  >
                    Login
                  </a>
                </li>
                <hr className="login_line d-none d-xl-block" />
                <li>
                  <button className="mb-0 ff_rubic fw_500 fs_sm clr_white register_btn">
                    Register
                  </button>
                </li>
              </ul>
              <div className="z-10 d-xl-none d-block">
                <h3 className="clr_white" onClick={clickshow}>
                  {first ? <BiMenu /> : <RxCross1 />}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hero section */}
      <div className="my_container py-sm-5 pt-3 position-relative vh_80_1200 d-flex flex-column justify-content-xl-center">
        <span className="position-absolute index_5 hero_big_line d-none d-xl-block">
          <img src={back_big} alt="back_big" />
        </span>
        <span className="position-absolute index_5 hero_line_small d-none d-xl-block">
          <img src={bg_small} alt="bg_small" />
        </span>
        <Row className="d-flex align-items-center flex-column-reverse flex-lg-row text-xl-start text-center position-relative index_5">
          <Col
            lg={6}
            className="mt-5 mt-xl-0 d-flex align-items-start  flex-column"
          >
            <button className="d-flex gap-2 flex-row align-items-center save_button border-0 p-2 p-sm-3">
              <button className="fw_500 ff_rubic fs_sm clr_blue hero_save_btn">
                75% SAVE
              </button>
              <p className="mb-0 fw_400 ff_rubic fs_sm clr_white ps-sm-3">
                For the Black Friday weekend
              </p>
            </button>
            <p className="fw_700 fs_4xl ff_rubic clr_white  text-start mt-4 pt-sm-2">
              Fastest & secure platform to invest in crypto
            </p>
            <p className="fw_400 ff_rubic text-start fs_sm clr_silver pt-sm-3 mx_430">
              Buy and sell cryptocurrencies, trusted by 10M wallets with over
              $30 billion in transactions.
            </p>
            <button className="fw_500 ff_rubic fs_md clr_white free_btn mt-sm-4">
              Try for FREE
              <span className="ps-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="16" fill="white" />
                  <path
                    d="M14.4999 21.0002C14.3683 21.0009 14.2379 20.9757 14.116 20.9259C13.9942 20.8762 13.8834 20.8029 13.7899 20.7102C13.6962 20.6172 13.6218 20.5066 13.571 20.3848C13.5203 20.2629 13.4941 20.1322 13.4941 20.0002C13.4941 19.8682 13.5203 19.7375 13.571 19.6156C13.6218 19.4937 13.6962 19.3831 13.7899 19.2902L17.0999 16.0002L13.9199 12.6902C13.7337 12.5028 13.6291 12.2494 13.6291 11.9852C13.6291 11.721 13.7337 11.4675 13.9199 11.2802C14.0129 11.1864 14.1235 11.1121 14.2454 11.0613C14.3672 11.0105 14.4979 10.9844 14.6299 10.9844C14.762 10.9844 14.8927 11.0105 15.0145 11.0613C15.1364 11.1121 15.247 11.1864 15.3399 11.2802L19.1999 15.2802C19.3832 15.4671 19.4858 15.7184 19.4858 15.9802C19.4858 16.2419 19.3832 16.4932 19.1999 16.6802L15.1999 20.6802C15.1102 20.7771 15.0021 20.8553 14.882 20.9102C14.7618 20.9651 14.632 20.9957 14.4999 21.0002Z"
                    fill="#3671E9"
                  />
                </svg>
              </span>
            </button>
          </Col>
          <Col
            lg={6}
            className="d-flex align-items-center justify-content-center"
          >
            <img
              className="hero_img_width position-relative index_5"
              src={image_side}
              alt="hero_img"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Hero;
