import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../components/Contants"; // Correct import

const useRestaurant = (resId) => {
  const [resData, setResData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getRestaurantInfo();
  }, [resId]);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(
        FETCH_MENU_URL + resId // Correct usage
      );
      const json = await data.json();
      console.log("JSON Data:", json);
      setResData(json.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  }
  return { resData, loading }; // Return both resData and loading state
}

export default useRestaurant;
