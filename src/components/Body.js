import RestCart, { withPromtedLabel } from "./RestCart";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfRest from "../utils/useListOfRest";
import useFilterRest from "../utils/useFilterRest";
import useSearchText from "../utils/useSearchText";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRest, setListOfRest] = useListOfRest();
  const [filterRest, setFilterRest] = useFilterRest([]);
  const [searchText, setSearchText] = useSearchText();
  console.log(listOfRest);

  const RestCardPromoted = withPromtedLabel(RestCart);

  useEffect(() => {
    if (Array.isArray(listOfRest) && listOfRest.length > 0) {
      setFilterRest(listOfRest);
    }
  }, [listOfRest, setFilterRest]);

  // Filter function
  const handleSearch = () => {
    const filtered = listOfRest.filter((res) =>
      res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRest(filtered);
  };
  // top restraunts
  const handleTopRated = () => {
    const filtered = listOfRest.filter(
      (res) => parseFloat(res.info?.avgRating) > 4.3
    );
    setFilterRest(filtered);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center border border-gray-200">
        <h1 className="text-2xl font-bold text-red-600 mb-3">
          🚫 You’re Offline
        </h1>
        <p className="text-gray-600">
          Looks like you’ve lost your internet connection.  
          Please check your Wi-Fi or mobile data and try again.
        </p>
      </div>
    </div>
  );
}


  const { loggedInUser, setUserInfo } = useContext(UserContext);

  return !listOfRest || listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body m-25 ">
      <div className="filter flex">
        <div className="search m-4  p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black p-1"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg cursor-pointer hover:bg-green-300"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="search m-4  p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg cursor-pointer  hover:bg-gray-300"
            onClick={handleTopRated}
          >
            Top Rated Restaurant
          </button>
        </div>
        {/* <div className="search m-4  p-4 flex items-center">
          <label>UserName:</label>
          <input
            className="border border-black p-2 m-2 rounded-2xl"
            value={loggedInUser}
            onChange={(e) => setUserInfo(e.target.value)}
          />
        </div> */}
      </div>
      <h1 className="font-bold text-3xl mx-8 mb-7">
        Restaurants With Online Food Delivery
      </h1>
      <div className="flex flex-wrap justify-around">
        {filterRest.map((r) => (
          <Link key={r?.info?.id} to={"/restaurants/" + r.info.id}>
            {
              /** if the restraunt is promoted then add a promoted label in it */
              r.info.isOpen ? (
                <RestCardPromoted resData={r?.info} />
              ) : (
                <RestCart resData={r?.info} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
