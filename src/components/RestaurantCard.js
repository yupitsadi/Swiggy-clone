import React from "react";
import { IMG_URl } from "./Contants";

const RestrauntCard = ({restaurant})=>{
    const {name, cuisines, cloudinaryImageId, avgRating} = restaurant.info;
      return(
          <div className="card">
              <img src={IMG_URl + cloudinaryImageId}/>
              <h3>{name}</h3>
              <h4>{cuisines.join(", ")}</h4>
              <h4>{avgRating} stars</h4>
          </div>
      );
};
export default RestrauntCard;
