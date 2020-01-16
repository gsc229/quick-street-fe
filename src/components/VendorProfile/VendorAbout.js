import React, { useState } from 'react';
import about from '../../styles/css/vendor_about.module.css';
import VendorAboutForm from './VendorAboutForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faPen } from '@fortawesome/free-solid-svg-icons';

const About = ({
  editAbout,
  vendorInfo,
  info,
  setInfo,
  editProfile,
  saveProfile,
  setVendorInfo
}) => {
  const [editingDetails, setEditingDetails] = useState(false);
  console.log(info);
  return (
    <div className={about.vendor_about_container}>
      <div className={about.inner_container}>
        <div className={about.about_top}>
          <h3>About Us</h3>
          <div className={about.vendor_about_btn_group}>
            <FontAwesomeIcon
              id={about.pen}
              className={`${about.icon} " " ${
                editingDetails ? about.red_edit : about.normal_pen
              }`}
              icon={faPen}
              onClick={() => {
                editProfile();
                setEditingDetails(!editingDetails);
              }}
            />
            <FontAwesomeIcon
              id={about.save}
              className={about.icon}
              icon={faSave}
              onClick={e => {
                saveProfile(e);
                setEditingDetails(false);
              }}
            />

            {/* <img src={create} alt='create' onClick={editProfile} />
                <img src={save} alt='save' onClick={saveProfile} /> */}
          </div>
        </div>

        <div className={about.about_bottom}>
          <VendorAboutForm
            editAbout={editAbout}
            vendorInfo={vendorInfo}
            info={info}
            setInfo={setInfo}
            setVendorInfo={setVendorInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
