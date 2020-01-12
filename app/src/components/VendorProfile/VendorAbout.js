import React from "react";
import about from '../../styles/css/vendor_about.module.css';
import VendorAboutForm from './VendorAboutForm';


;

const About = ({ edit, vendorInfo, info, setInfo }) => {


  return (
    <div className={about.vendor_about_container}>


      <div className="vendor_about_left">
        <VendorAboutForm
          edit={edit}
          vendorInfo={vendorInfo}
          info={info}
          setInfo={setInfo}
        />
      </div>
      <div className="vendor_about_right">

      </div>





      <div className={about.vendor_about_title}>
        <p>About US</p>

      </div>


    </div>
  );
};

export default About;
