import React, { useState, useEffect } from "react";
import { HeroBanner } from "../components/index";
import OrderHistory from "../components/Dashboard/OrderHistory";
import axiosWithAuth from "../utils/axiosWithAuth";

// styling
import dashboard from "../styles/scss/dashboard.module.scss";
const Dashboard = props => {
  const [vendorBannerId, setVendorBannerId] = useState("");
  const [vendorName, setVendorName] = useState("");
  // Checks if logged in user is vendor
  const isVendor = localStorage.getItem("isVendor");
  const user_id = localStorage.getItem("user_id");

  const getVendorBannerId = vendorId => {
    axiosWithAuth()
      .get(`/vendors/${vendorId}`)
      .then(res => {
        console.log(res.data.data);
        setVendorBannerId(res.data.data.vendor_banner);
        setVendorName(res.data.data.business_name);
      });
  };

  useEffect(() => {
    getVendorBannerId(user_id);
  }, []);

  // if
  // return Vendor components
  if (isVendor) {
    return (
      <div className={dashboard.container}>
        <div className={dashboard.wrapper}>
          <HeroBanner vendorBannerId={vendorBannerId} />
        </div>
        <div>
          <p>{vendorName}'s dashboard</p>
        </div>
        <div>
          <button
            onClick={() => {
              console.log(`linked to stripe account`);
            }}
          >
            View Stripe Account
          </button>
        </div>
        <div>
          <OrderHistory orders={props.orders} isVendor={isVendor} />
        </div>
        <div>
          <button
            onClick={() => {
              props.history.push(`profile/${user_id}`);
            }}
          >
            Edit profile
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <OrderHistory orders={props.orders} isVendor={isVendor} />
      </div>
    );
  }

  // else

  //return Customer Components
};

export default Dashboard;
