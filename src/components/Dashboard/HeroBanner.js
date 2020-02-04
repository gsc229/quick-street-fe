import React from "react";
import { Image, CloudinaryContext, Transformation } from "cloudinary-react";

// styling
import herobanner from "../../styles/scss/herobanner.module.scss";
const HeroBanner = props => {
  return (
    <div className={herobanner.wrapper}>
      <CloudinaryContext cloudName="quickstlabs">
        <Image publicId={props.vendorBannerId}>
          <Transformation
            gravity="center"
            height="355"
            width="1062"
            crop="fill"
          />
        </Image>
      </CloudinaryContext>
      <p>{props.name}</p>
    </div>
  );
};

export default HeroBanner;
