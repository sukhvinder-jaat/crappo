import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bitcoin from "../assets/Images/svg/bitcoin_logo.svg";
import Ethereum from "../assets/Images/svg/bit_2.svg";
import litecoin from "../assets/Images/svg/bit_3.svg";
import Slider from "react-slick";
const Cryptocurrencies = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  const arrow = React.useRef();
  return (
    <>
      <section className="bg_trade position-relative py-5 overflow-hidden">
        <Container className="container">
          <Slider {...settings} ref={arrow}>
            <div>
              <div className="p-3 slider_box p-lg-5 mx-md-3 d-flex flex-column align-items-center text-center cardbr_16 m-2 currenciescard">
                <img src={bitcoin} alt="bitcoin" />
                <p className="mt-5 ff_rubic fw_700 fs_2xl clr_black">
                  Bitcoin
                  <span className="fw_500 fs_md clr_dark_grey ms-2">BTC</span>
                </p>
                <p className="ff_rubic fw_400 fs_sm clr_dark82 mb-4">
                  Digital currency in which a record of transactions is
                  maintained.
                </p>
                <button className="border-0 ff_rubic fw_500 fs_md text-white show_btn bg_blue2 rounded-pill p-3 d-none">
                  Start mining
                  <svg
                    className="ms-4"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="16" fill="white" />
                    <path
                      d="M14.4999 20.9999C14.3683 21.0007 14.2379 20.9755 14.116 20.9257C13.9942 20.8759 13.8834 20.8026 13.7899 20.7099C13.6962 20.617 13.6218 20.5064 13.571 20.3845C13.5203 20.2626 13.4941 20.1319 13.4941 19.9999C13.4941 19.8679 13.5203 19.7372 13.571 19.6154C13.6218 19.4935 13.6962 19.3829 13.7899 19.2899L17.0999 15.9999L13.9199 12.6899C13.7337 12.5026 13.6291 12.2491 13.6291 11.9849C13.6291 11.7207 13.7337 11.4673 13.9199 11.2799C14.0129 11.1862 14.1235 11.1118 14.2454 11.061C14.3672 11.0103 14.4979 10.9841 14.6299 10.9841C14.762 10.9841 14.8927 11.0103 15.0145 11.061C15.1364 11.1118 15.247 11.1862 15.3399 11.2799L19.1999 15.2799C19.3832 15.4669 19.4858 15.7182 19.4858 15.9799C19.4858 16.2417 19.3832 16.493 19.1999 16.6799L15.1999 20.6799C15.1102 20.7769 15.0021 20.855 14.882 20.91C14.7618 20.9649 14.632 20.9955 14.4999 20.9999Z"
                      fill="#3671E9"
                    />
                  </svg>
                </button>
                <svg
                  className="hide_btn"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="31"
                    stroke="#2B076E"
                    stroke-opacity="0.2"
                    stroke-width="2"
                  />
                  <path
                    d="M28.9999 42.0001C28.7367 42.0016 28.4757 41.9512 28.2321 41.8516C27.9884 41.7521 27.7668 41.6055 27.5799 41.4201C27.3924 41.2342 27.2436 41.013 27.1421 40.7693C27.0406 40.5255 26.9883 40.2641 26.9883 40.0001C26.9883 39.7361 27.0406 39.4747 27.1421 39.2309C27.2436 38.9872 27.3924 38.766 27.5799 38.5801L34.1999 32.0001L27.8399 25.3801C27.4674 25.0054 27.2583 24.4985 27.2583 23.9701C27.2583 23.4417 27.4674 22.9348 27.8399 22.5601C28.0258 22.3726 28.247 22.2239 28.4907 22.1223C28.7344 22.0208 28.9959 21.9685 29.2599 21.9685C29.5239 21.9685 29.7853 22.0208 30.029 22.1223C30.2728 22.2239 30.494 22.3726 30.6799 22.5601L38.3999 30.5601C38.7663 30.934 38.9716 31.4366 38.9716 31.9601C38.9716 32.4836 38.7663 32.9862 38.3999 33.3601L30.3999 41.3601C30.2204 41.554 30.0042 41.7103 29.7639 41.8202C29.5236 41.93 29.2639 41.9912 28.9999 42.0001Z"
                    fill="#3671E9"
                  />
                </svg>
              </div>
            </div>
            <div>
              <div className="p-3 slider_box p-lg-5 mx-md-3 d-flex flex-column align-items-center text-center cardbr_16 m-2 currenciescard">
                <img src={Ethereum} alt="bitcoin" />
                <p className="mt-5 ff_rubic fw_700 fs_2xl clr_black">
                  Ethereum
                  <span className="fw_500 fs_md clr_dark_grey ms-2">ETH</span>
                </p>
                <p className="ff_rubic fw_400 fs_sm clr_dark82 mb-4">
                  Blockchain technology to create and run decentralized digital
                  applications.
                </p>
                <button className="border-0 ff_rubic fw_500 fs_md text-white show_btn bg_blue2 rounded-pill p-3 d-none">
                  Start mining
                  <svg
                    className="ms-4"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="16" fill="white" />
                    <path
                      d="M14.4999 20.9999C14.3683 21.0007 14.2379 20.9755 14.116 20.9257C13.9942 20.8759 13.8834 20.8026 13.7899 20.7099C13.6962 20.617 13.6218 20.5064 13.571 20.3845C13.5203 20.2626 13.4941 20.1319 13.4941 19.9999C13.4941 19.8679 13.5203 19.7372 13.571 19.6154C13.6218 19.4935 13.6962 19.3829 13.7899 19.2899L17.0999 15.9999L13.9199 12.6899C13.7337 12.5026 13.6291 12.2491 13.6291 11.9849C13.6291 11.7207 13.7337 11.4673 13.9199 11.2799C14.0129 11.1862 14.1235 11.1118 14.2454 11.061C14.3672 11.0103 14.4979 10.9841 14.6299 10.9841C14.762 10.9841 14.8927 11.0103 15.0145 11.061C15.1364 11.1118 15.247 11.1862 15.3399 11.2799L19.1999 15.2799C19.3832 15.4669 19.4858 15.7182 19.4858 15.9799C19.4858 16.2417 19.3832 16.493 19.1999 16.6799L15.1999 20.6799C15.1102 20.7769 15.0021 20.855 14.882 20.91C14.7618 20.9649 14.632 20.9955 14.4999 20.9999Z"
                      fill="#3671E9"
                    />
                  </svg>
                </button>
                <svg
                  className="hide_btn"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="31"
                    stroke="#2B076E"
                    stroke-opacity="0.2"
                    stroke-width="2"
                  />
                  <path
                    d="M28.9999 42.0001C28.7367 42.0016 28.4757 41.9512 28.2321 41.8516C27.9884 41.7521 27.7668 41.6055 27.5799 41.4201C27.3924 41.2342 27.2436 41.013 27.1421 40.7693C27.0406 40.5255 26.9883 40.2641 26.9883 40.0001C26.9883 39.7361 27.0406 39.4747 27.1421 39.2309C27.2436 38.9872 27.3924 38.766 27.5799 38.5801L34.1999 32.0001L27.8399 25.3801C27.4674 25.0054 27.2583 24.4985 27.2583 23.9701C27.2583 23.4417 27.4674 22.9348 27.8399 22.5601C28.0258 22.3726 28.247 22.2239 28.4907 22.1223C28.7344 22.0208 28.9959 21.9685 29.2599 21.9685C29.5239 21.9685 29.7853 22.0208 30.029 22.1223C30.2728 22.2239 30.494 22.3726 30.6799 22.5601L38.3999 30.5601C38.7663 30.934 38.9716 31.4366 38.9716 31.9601C38.9716 32.4836 38.7663 32.9862 38.3999 33.3601L30.3999 41.3601C30.2204 41.554 30.0042 41.7103 29.7639 41.8202C29.5236 41.93 29.2639 41.9912 28.9999 42.0001Z"
                    fill="#3671E9"
                  />
                </svg>
              </div>
            </div>
            <div>
              <div className="p-3 slider_box p-lg-5 mx-md-3 d-flex flex-column align-items-center text-center cardbr_16 m-2 currenciescard">
                <img src={litecoin} alt="bitcoin" />
                <p className="mt-5 ff_rubic fw_700 fs_2xl clr_black">
                  Litecoin
                  <span className="fw_500 fs_md clr_dark_grey ms-2">LTC</span>
                </p>
                <p className="ff_rubic fw_400 fs_sm clr_dark82 mb-4">
                  Cryptocurrency that enables instant payments to anyone in the
                  world.
                </p>
                <button className="border-0 ff_rubic fw_500 fs_md text-white show_btn bg_blue2 rounded-pill p-3 d-none">
                  Start mining
                  <svg
                    className="ms-4"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="16" fill="white" />
                    <path
                      d="M14.4999 20.9999C14.3683 21.0007 14.2379 20.9755 14.116 20.9257C13.9942 20.8759 13.8834 20.8026 13.7899 20.7099C13.6962 20.617 13.6218 20.5064 13.571 20.3845C13.5203 20.2626 13.4941 20.1319 13.4941 19.9999C13.4941 19.8679 13.5203 19.7372 13.571 19.6154C13.6218 19.4935 13.6962 19.3829 13.7899 19.2899L17.0999 15.9999L13.9199 12.6899C13.7337 12.5026 13.6291 12.2491 13.6291 11.9849C13.6291 11.7207 13.7337 11.4673 13.9199 11.2799C14.0129 11.1862 14.1235 11.1118 14.2454 11.061C14.3672 11.0103 14.4979 10.9841 14.6299 10.9841C14.762 10.9841 14.8927 11.0103 15.0145 11.061C15.1364 11.1118 15.247 11.1862 15.3399 11.2799L19.1999 15.2799C19.3832 15.4669 19.4858 15.7182 19.4858 15.9799C19.4858 16.2417 19.3832 16.493 19.1999 16.6799L15.1999 20.6799C15.1102 20.7769 15.0021 20.855 14.882 20.91C14.7618 20.9649 14.632 20.9955 14.4999 20.9999Z"
                      fill="#3671E9"
                    />
                  </svg>
                </button>
                <svg
                  className="hide_btn "
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="31"
                    stroke="#2B076E"
                    stroke-opacity="0.2"
                    stroke-width="2"
                  />
                  <path
                    d="M28.9999 42.0001C28.7367 42.0016 28.4757 41.9512 28.2321 41.8516C27.9884 41.7521 27.7668 41.6055 27.5799 41.4201C27.3924 41.2342 27.2436 41.013 27.1421 40.7693C27.0406 40.5255 26.9883 40.2641 26.9883 40.0001C26.9883 39.7361 27.0406 39.4747 27.1421 39.2309C27.2436 38.9872 27.3924 38.766 27.5799 38.5801L34.1999 32.0001L27.8399 25.3801C27.4674 25.0054 27.2583 24.4985 27.2583 23.9701C27.2583 23.4417 27.4674 22.9348 27.8399 22.5601C28.0258 22.3726 28.247 22.2239 28.4907 22.1223C28.7344 22.0208 28.9959 21.9685 29.2599 21.9685C29.5239 21.9685 29.7853 22.0208 30.029 22.1223C30.2728 22.2239 30.494 22.3726 30.6799 22.5601L38.3999 30.5601C38.7663 30.934 38.9716 31.4366 38.9716 31.9601C38.9716 32.4836 38.7663 32.9862 38.3999 33.3601L30.3999 41.3601C30.2204 41.554 30.0042 41.7103 29.7639 41.8202C29.5236 41.93 29.2639 41.9912 28.9999 42.0001Z"
                    fill="#3671E9"
                  />
                </svg>
              </div>
            </div>
          </Slider>
          <div className="d-flex justify-content-between d-xl-none">
            <span onClick={() => arrow.current.slickPrev()}>
              <svg
                className="rotate"
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.33317 14.6665H20.9498L12.8165 22.7999C12.1665 23.4499 12.1665 24.5165 12.8165 25.1665C13.4665 25.8165 14.5165 25.8165 15.1665 25.1665L26.1498 14.1832C26.7998 13.5332 26.7998 12.4832 26.1498 11.8332L15.1832 0.833203C14.5332 0.183203 13.4832 0.183203 12.8332 0.833203C12.1832 1.4832 12.1832 2.5332 12.8332 3.1832L20.9498 11.3332H2.33317C1.4165 11.3332 0.666504 12.0832 0.666504 12.9999C0.666504 13.9165 1.4165 14.6665 2.33317 14.6665Z"
                  fill="#454749"
                />
              </svg>
            </span>
            <span onClick={() => arrow.current.slickNext()}>
              <svg
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.33317 14.6665H20.9498L12.8165 22.7999C12.1665 23.4499 12.1665 24.5165 12.8165 25.1665C13.4665 25.8165 14.5165 25.8165 15.1665 25.1665L26.1498 14.1832C26.7998 13.5332 26.7998 12.4832 26.1498 11.8332L15.1832 0.833203C14.5332 0.183203 13.4832 0.183203 12.8332 0.833203C12.1832 1.4832 12.1832 2.5332 12.8332 3.1832L20.9498 11.3332H2.33317C1.4165 11.3332 0.666504 12.0832 0.666504 12.9999C0.666504 13.9165 1.4165 14.6665 2.33317 14.6665Z"
                  fill="#454749"
                />
              </svg>
            </span>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Cryptocurrencies;
