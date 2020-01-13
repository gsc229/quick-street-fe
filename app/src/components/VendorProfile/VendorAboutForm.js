import React from 'react'
import down from "../../assets/down.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUserClock } from '@fortawesome/free-solid-svg-icons'
import about from '../../styles/css/vendor_about.module.css';

const VendorAboutForm = ({ edit, vendorInfo, info, setInfo }) => {
  const changeHandler = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className={about.vendor_info_form}>
        <div className={about.vendor_info_left}>
          <div className={about.vendor_info_about, about.input_container
          }>
            <label for="about">About</label>
            <textarea
              type="text"
              name="about"
              value={edit ? info.about : vendorInfo.description}
              onChange={changeHandler}
            />
          </div>
          <div className={about.vendor_info_hour}>
            <label>Hours of Operation</label>
            <div className={about.vendor_info_hour_input_group}>
              <label htmlFor="hour_from">
                <FontAwesomeIcon icon={faClock} regular />
                <i class="far fa-clock"></i>
              </label>
              <input
                type="text"
                name="hour_from"
                value={
                  edit
                    ? info.hour_from
                    : vendorInfo.hours
                      ? vendorInfo.hours.split("_")[0]
                      : ""
                }
                onChange={changeHandler}
              />
              to
              <input
                className={about.vendor_info_hour_input_2}
                type="text"
                name="hour_to"
                value={
                  edit
                    ? info.hour_to
                    : vendorInfo.hours
                      ? vendorInfo.hours.split("_")[1]
                      : ""
                }
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className={about.vendor_info_days, about.input_container
          }>
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
            <span className={about.vendor_info_arrow}>
              <img src={down} alt="arrow down" />
            </span>
          </div>
          <div className={about.vendor_info_phone, about.input_container}>
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={edit ? info.phone : vendorInfo.phone}
              onChange={changeHandler}
            />
          </div>

        </div>




        <div className={about.vendor_info_right}>
          <div className={about.vendor_info_location}>
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={edit ? info.location : vendorInfo.location.zipcode}
              onChange={changeHandler}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default VendorAboutForm;
