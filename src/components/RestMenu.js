import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestMenu from "../utils/useRestMenu";
import RestCategory from "./RestCategory";
import { useState, useEffect } from "react";
import { CDN_URL } from "../utils/constants";

const RestMenu = () => {
  const { resId } = useParams();
  const dummy = "Dummy data";
  const resInfo = useRestMenu(resId);
  console.log(resInfo);
  const [showIndex, setShowIndex] = useState();

  if (resInfo === null) return <Shimmer />;

  // restaurant info dynamically
  const restaurantInfo = resInfo?.data?.cards
    ?.map((c) => c.card?.card)
    ?.find((c) => c?.info)?.info;

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    restaurantInfo || {};

  //  menu items dynamically
  const menuCards =
    resInfo?.data?.cards?.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards || [];

  const menuItems = menuCards
    .map((c) => c.card?.card?.itemCards)
    .filter(Boolean)
    .flat();

  const categories = menuCards.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="text-center m-35">
      <h1 className="font-bold my-2 text-2xl mr-[680px]">{name}</h1>
      <img
        className="h-40 w-40 rounded-2xl ml-35"
        src={CDN_URL + cloudinaryImageId}
        alt="not load"
      />
      <p className="font-bold text-lg absolute ml-[160px] m-[-27px] text-white">
        {costForTwoMessage}
      </p>

      {/* categories */}
      {categories.map((category, index) => (
        <RestCategory
          key={category.card.card.categoryId}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() =>
            setShowIndex((prevIndex) => (prevIndex === index ? null : index))
          }
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestMenu;
