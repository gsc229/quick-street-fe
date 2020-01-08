import React, { useState } from "react";

import down from "../../assets/down.png";

const About = ({ edit, vendorInfo }) => {
  const [info, setInfo] = useState({
    days: "0",
    phone: "",
    about: "",
    hour_from: "",
    hour_to: "",
    location: ""
  });

  const changeHandler = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log(`submitted`);
  };

  return (
    <div className="vendor_about_container">
      <div className="vendor_about_title">
        <p>About Us</p>
        <hr />
      </div>

      <form className="vendor_info_form" onSubmit={submitHandler}>
        <div className="vendor_info_left">
          <div className="vendor_info_hour">
            <label>Hours of Operation</label>
            <div className="vendor_info_hour_input_group">
              <input
                type="text"
                name="hour_from"
                value={edit ? info.hour_from : vendorInfo.hours}
                onChange={changeHandler}
              />
              to
              <input
                className="vendor_info_hour_input_2"
                type="text"
                name="hour_to"
                value={edit ? info.hour_to : vendorInfo.hours}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="vendor_info_days">
            <label>Days of week</label>
            <select
              name="days"
              value={edit ? info.days : vendorInfo.days_of_week}
              onChange={changeHandler}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            <span className="vendor_info_arrow">
              <img src={down} alt="arrow down" />
            </span>
          </div>
          <div className="vendor_info_phone">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={edit ? info.phone : vendorInfo.phone}
              onChange={changeHandler}
            />
          </div>
          <div className="vendor_info_about">
            <label>About</label>
            <textarea
              type="text"
              name="about"
              value={edit ? info.about : vendorInfo.description}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="vendor_info_right">
          <div className="vendor_info_location">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={edit ? info.location : vendorInfo.zipcode}
              onChange={changeHandler}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default About;
