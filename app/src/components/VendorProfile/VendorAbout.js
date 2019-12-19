import React, { useState } from "react";

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
    <div>
      <h2>About Us</h2>
      <div className="vendor_about_container">
        <div className="vendor_info">
          <form className="vendor_info_form">
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={info.name}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label>Phone</label>
              <input
                type="number"
                name="phone"
                value={info.phone}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label>About</label>
              <input
                type="text"
                name="about"
                value={info.about}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label>Hours of Operation</label>
              <input
                type="number"
                name="hour_from"
                value={info.hour_from}
                onChange={changeHandler}
              />
              to
              <input
                type="number"
                name="hour_to"
                value={info.hour_to}
                onChange={changeHandler}
              />
            </div>
          </form>
        </div>
        <div className="bulletin_board"></div>
      </div>
    </div>
  );
};

export default About;
