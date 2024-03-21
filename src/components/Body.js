import React from "react";
import { RestrauntList } from "./Contants";
import RestrauntCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

function filterData(searchInput, restaurant) {
  return restaurant.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);  
  const [filteredrestaurants, setfilteredrestaurants] = useState([]);
  const [searchInput, setsearchInput] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.49270&lng=77.53580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredrestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
  }

  if(!allRestaurants) return null;  //to handel no restaurant  

  if(filteredrestaurants?.length==0) return <h1>No Restaurant Found</h1>;   //to handel no restaurant in filter data 

  return filteredrestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          className="search-input"
          placeholder="Search"
          type="text"
          value={searchInput}
          onChange={(e) => {
            setsearchInput(e.target.value);
          }}
        />
        <button
          key="search-click"
          className="search-click"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setfilteredrestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resturant-list">
        {filteredrestaurants.map((restaurant, index) => (
          <RestrauntCard key={index} restaurant={restaurant} />
        ))}
      </div>
    </>
  );
};

export default Body;
