import React, { useState } from "react";
import VendorBulletin from "./VendorBulletin";

const About = props => {
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    about: "",
    hour_from: "",
    hour_to: ""
  });

  const changeHandler = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log(`submitted`);
  };

  return (
    <>
      <p>About Us</p>
      <div className="vendor_about_container">
        <div className="vendor_info">
          <form className="vendor_info_form">
            <div className="vendor_info_name">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={info.name}
                onChange={changeHandler}
              />
            </div>
            <div className="vendor_info_phone">
              <label>Phone</label>
              <input
                type="number"
                name="phone"
                value={info.phone}
                onChange={changeHandler}
              />
            </div>
            <div className="vendor_info_about">
              <label>About</label>
              <input
                type="text"
                name="about"
                value={info.about}
                onChange={changeHandler}
              />
            </div>
            <div className="vendor_info_hour">
              <label>Hours of Operation</label>
              <div className="vendor_info_hour_input_group">
                <input
                  type="number"
                  name="hour_from"
                  value={info.hour_from}
                  onChange={changeHandler}
                />
                to
                <input
                  className="vendor_info_hour_input_2"
                  type="number"
                  name="hour_to"
                  value={info.hour_to}
                  onChange={changeHandler}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default About;
