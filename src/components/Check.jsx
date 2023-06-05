import React from "react";

export const Check = () => {
  return (
    <div className="bg_blue pt-lg-5">
      <div className="my_container">
        <div
          className="d-flex flex-column align-items-lg-center align-items-start"
          data-aos="flip-up"
        >
          <p className="text-lg-center text-start ff_rubic text-white fw_700 fs_3xl">
            Check how much you can earn
          </p>
          <p className="text-lg-center text-start clr_silver ff_rubic fw_400 fs_md mx_600">
            Let’s check your hash rate to see how much you will earn today,
            Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="">
          <div
            className="check_box d-flex flex-column flex-md-row justify-content-between align-items-start p-sm-5 px-3 py-4 mt-5"
            data-aos="flip-down"
          >
            <div className="d-flex check_input w_350_lg">
              <input
                type="text"
                className="border-0 fw_400 ff_rubic fs_lg bg_light_silver clr_blue w-100 footer"
                placeholder="Enter your hash rate"
              />
            </div>
            <div className="d-flex mt-3 mt-md-0">
              <div className="border_bottom_light w_350_lg">
                <select className="border-0 fw_400 ff_rubic fs_lg bg_light_silver w-100">
                  <option
                    value="someOption"
                    className="fw_400 ff_rubic fs_lg bg_dark_blue mb-0"
                  >
                    TH/s
                  </option>
                  <option
                    value="otherOption"
                    className="fw_400 ff_rubic fs_lg bg_dark_blue"
                  >
                    Other option
                  </option>
                </select>
              </div>
            </div>
            <button
              className="ff_rubic clr_white fw_500 rounded-pill bg_blue2 border-0 
          caltulate_btn mt-3 mt-md-0"
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
