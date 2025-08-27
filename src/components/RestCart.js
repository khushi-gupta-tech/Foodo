import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestCart = (props) => {
  const { resData } = props; // destructing
// console.log(resData);

  const { loggedInUser } = useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    areaName,
    aggregatedDiscountInfoV3,
  } = resData || {};
 // console.log(props);

  return (
    <div data-testid="resCard" className="m-4  p-4  w-[250px] rounded-lg   hover:bg-gray-100">
      <img
        className=" h-50  w-90 rounded-2xl"
        src={CDN_URL + cloudinaryImageId}
        alt="not load"
      />
      <div className="font-bold text-white absolute m-[-30px] mx-[10px]">
        <span>{aggregatedDiscountInfoV3?.header} </span>
        <span>{aggregatedDiscountInfoV3?.subHeader}</span>
      </div>

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <div className="font-bold text-gray-800">
        <span className="">⭐&nbsp;{avgRating}&nbsp;</span>
        <span className="m-2">• {sla?.deliveryTime}&nbsp;min</span>
      </div>
      <h4 className="text-gray-700">{cuisines?.join(", ")}</h4>
      <h4 className="text-gray-700">{areaName}</h4>
    </div>
  );
};

// Higher Order Component
// input - RestCart => return new component RestCardPromoted

export const withPromtedLabel = (RestCard) => {
  return (props) => {
    return (
      <div className="relative group">
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg  opacity-0 group-hover:opacity-100 transition duration-300">
          Promoted
        </label>
        <RestCard {...props} />
      </div>
    );
  };
};
export default RestCart;
