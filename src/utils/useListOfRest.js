import { useState, useEffect } from "react";

const useListOfRest = () => {
  const [listOfRest, setListOfRest] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:5000/api/restaurants");
    const json = await data.json();
    console.log(json);

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRest(restaurants);
  };
  return [listOfRest, setListOfRest];
};
export default useListOfRest;
