import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import about from '../../../styles/css/vendor_about.module.css';
import Map from '../../shared/Map';

const AboutForm = ({ editAbout, vendorInfo, info, setVendorInfo }) => {
  const changeHandler = (e) => {
    if (editAbout) {
      setVendorInfo({ ...vendorInfo, [e.target.name]: e.target.value });
      // console.log('CHANGE HANDLER VendorABout');
    }
  };

  const changeZip = (e) => {
    if (editAbout) {
      setVendorInfo({
        ...vendorInfo,
        location: { ...vendorInfo.location, zipcode: e.target.value }
      });
    }
  };

  // console.log('info', info);
  // console.log(`vendor info`, vendorInfo);
  return (
    <div>
      <form className={about.vendor_info_form}>
        <div className={about.vendor_info_left}>
          <div className={`${about.vendor_info_about} ${about.input_container}`}>
            <label for="about">Bio</label>
            <textarea
              type="text"
              name="description"
              value={vendorInfo.description}
              onChange={changeHandler}
            />
          </div>

          {/* HOURS
          <div className={`${about.vendor_info_hour} ${about.input_container}`}>
            <label>Hours of Operation</label>
            <div className={about.vendor_info_hour_input_group}>
              <div className={about.inputWithIcon}>
                <input
                  type="text"
                  name="hour_from"
                  className={about.hour_input}
                  value={
                    editAbout
                      ? info.hour_from
                      : vendorInfo.hours
                        ? vendorInfo.hours.split("_")[0]
                        : ""
                  }
                  onChange={changeHandler}
                />
                <FontAwesomeIcon
                  id={about.clock}
                  className={about.input_icon}
                  icon={faClock}
                />
              </div>

              <p>to</p>

              <div className={about.inputWithIcon}>
                <input
                  className={about.vendor_info_hour_input_2}
                  type="text"
                  name="hour_to"
                  className={about.hour_input}
                  id={about.hour_to}
                  value={
                    editAbout
                      ? info.hour_to
                      : vendorInfo.hours
                        ? vendorInfo.hours.split("_")[1]
                        : ""
                  }
                  onChange={changeHandler}
                />
                <FontAwesomeIcon
                  id={about.clock}
                  className={about.input_icon}
                  icon={faClock}
                />
              </div>
            </div>
          </div>

          <div className={`${about.vendor_info_days} ${about.input_container}`}>
            <label>Days of week</label>
            <select
              name="days"
              value={editAbout ? info.days : vendorInfo.days_of_week}
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

          </div>
 */}
          {/* <span className={about.vendor_info_arrow}>
              <img src={down} alt="arrow down" />
            </span> */}

          <div className={`${about.vendor_info_phone} ${about.input_container} `}>
            <h5>Contact</h5>
            <label>Phone</label>
            <div className={about.inputWithIcon}>
              <input type="text" name="phone" value={vendorInfo.phone} onChange={changeHandler} />
              <FontAwesomeIcon className={about.input_icon} icon={faPhone} />
            </div>
            <label>Email</label>
            <div className={about.inputWithIcon}>
              <input type="text" name="email" value={vendorInfo.email} onChange={changeHandler} />
              <FontAwesomeIcon className={about.input_icon} icon={faPaperPlane} />
            </div>
          </div>
        </div>{' '}
        {/* --vendor_info_left */}
        <div className={about.vendor_info_right}>
          <div className={(about.vendor_info_location, about.input_container)}>
            <label>Zipcode: </label>
            {/* REPLACE 18641 w/ vendorInfo.location.zipcode */}
            <input type="text" name="zipcode" value={vendorInfo.location.zipcode} onChange={changeZip} />
            <div className={about.map_container}>
              <Map zipcode={vendorInfo.location.zipcode} width={403} height={280} radius={3000} />
            </div>
          </div>
        </div>{' '}
        {/* --vendor_info_right */}
      </form>
    </div>
  );
};

export default AboutForm;
