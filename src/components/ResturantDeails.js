import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer"; // Import your shimmer component
import Contact from "./Contact";
import "./ResturantDetails.css"; // Import your CSS file
import { IMG_URl } from "./Contants";

function RestaurantMenu() {
  const { resId } = useParams();
  const [resData, setResData] = useState(null); // Initialize resData as null

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(
        "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=641497"
      );
      const json = await data.json();
      console.log(json);
      const print = console.log("res"+ resData);
      setResData(json.data);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  }

  return (
    <>
      <h1>Restaurant id {resId}</h1>
      {resData ? (
        <>
            <print/>
          {resData ? (
            <>
              <h2>Name: {resData?.card[2].card.card.info.name}</h2>
              <div className="check-box">
                <img className="resturant-Deails-img" src={IMG_URl+resData?.cards[2]?.card?.card?.info?.cloudinaryImageId}/>
                <h3>
                  Rating: {resData?.cards[2]?.card?.card?.info?.avgRating} -{" "}
                  {resData?.cards[2]?.card?.card?.info?.costForTwoMessage}
                </h3>
                <h3>
                  Cuisines:{" "}
                  {resData?.cards[2]?.card?.card?.info?.cuisines.join(", ")}
                </h3>
                <h3>Outlet: {resData?.cards[2]?.card?.card?.info?.locality}</h3>
                <h4
                  dangerouslySetInnerHTML={{
                    __html:
                      resData?.cards[2]?.card?.card?.info
                        ?.expectationNotifiers[0]?.enrichedText,
                  }}
                />
              </div>

              <div className="deals-container">
                {resData?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers.map(
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
                <h2>Menus</h2>
                <div className="">
                    <ul>
                        {Object.values(resData?.data?.cards[4]?.card?.categories[0]?.itemCards[1]?.card?.info?.name)}
                    </ul>
                </div>

            </>
          ) : (
            <Shimmer /> // Display shimmer UI while waiting for data
          )}
        </>
      ) : (
        <Shimmer /> // Display shimmer UI while waiting for data
      )}
    </>
  );
}

export default RestaurantMenu;
