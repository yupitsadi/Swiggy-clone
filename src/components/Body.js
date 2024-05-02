   import React from "react";
import { useState, useEffect } from "react";
import RestrauntCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

function filterData(searchInput, restaurant) {
  return restaurant.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);  
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState(""); 

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
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOnline();
  if(!isOnline){
    return <h1>Hey check your internet connection</h1>;
  }

  if (!allRestaurants) return null; //to handle no restaurants  
  
  // if (filteredrestaurants?.length === 0) return <h1>No Restaurant Found</h1>;   //to handle no restaurants in filtered data 

  return filteredrestaurants?.length === 0 ? (
    <Shimmer/>
  ) : (
    <>
      <div className="search-container">
        <input
          className="search-input"
          placeholder="Search"
          type="text"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          key="search-click"
          className="search-click"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resturant-list">
        {filteredrestaurants.map((restaurant, index) => (
          <Link key={index} to={`/restaurant/${restaurant.info.id}`}>
          <RestrauntCard key={index} restaurant={restaurant} />
          </Link> 
        ))}
      </div>
    </>
  );
};

export default Body;
