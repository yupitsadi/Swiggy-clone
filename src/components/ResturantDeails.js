import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer"; // Import your shimmer component
import { IMG_URl } from "./Contants";
import "./ResturantDetails.css";
import useRestaurant from "../utils/useaRestaurant";

function RestaurantMenu() {
  const { resId } = useParams();
  const { resData, loading } = useRestaurant(resId);

  if (loading) {
    return <Shimmer />;
  }  

  return (
    <>
      <h1>Restaurant id {resId}</h1>
      <h2>Name: {resData?.cards[2]?.card?.card?.info?.name}</h2>
      <div className="check-box">
        <img
          className="resturant-Deails-img"
          src={
            IMG_URl + resData?.cards?.[2]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h3>
          Rating: {resData?.cards?.[2]?.card?.card?.info?.avgRating} -{" "}
          {resData?.cards?.[2]?.card?.card?.info?.costForTwoMessage}
        </h3>
        <h3>
          Cuisines:{" "}
          {resData?.cards?.[2]?.card?.card?.info?.cuisines?.join(", ")}
        </h3>
        <h3>Outlet: {resData?.cards?.[2]?.card?.card?.info?.locality}</h3>
        <h4
          dangerouslySetInnerHTML={{
            __html:
              resData?.cards?.[2]?.card?.card?.info?.expectationNotifiers?.[0]
                ?.enrichedText,
          }}
        />
      </div>

      <div className="deals-container">
        {resData?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers?.map(
          (offer, index) => (
            <div key={index} className="flash-card">
              <h3>{offer.info.header}</h3>
              <p>
                Expires on:{" "}
                {new Date(offer.info.expiryTime).toLocaleDateString()}
              </p>
              <button>{offer.info.couponCode}</button>
            </div>
          )
        )}
      </div>

      <div className="menu-container">
        {resData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
          (outerCard, index) => (
            <div key={index} className="menu-category">
              {outerCard.card.title && (
                <h3 className="menu-category-title">{outerCard.card.title}</h3>
              )}
              <ul className="menu-item-list">
                {outerCard.card.card &&
                  outerCard.card.card.itemCards &&
                  outerCard.card.card.itemCards.map((innerCard, innerIndex) => (
                    <li key={innerIndex} className="menu-item">
                      {innerCard.card.info && (
                        <>
                            <div className="menu-item-image">
                              <img
                                src={IMG_URl + innerCard.card.info.imageId}
                                alt={innerCard.card.info.name}
                                className="menu-item-img"
                              />
                            </div>

                          <div className="menu-item-name">
                            {innerCard.card.info.name}
                          </div>
                          <div className="menu-item-description">
                            {innerCard.card.info.description}
                          </div>
                          <div className="menu-item-price">
                            Price: ₹{innerCard.card.info.price / 100}{" "}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default RestaurantMenu;
