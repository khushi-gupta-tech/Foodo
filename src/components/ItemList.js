import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../../redux/cartSlice";

const ItemList = ({ items, dummy }) => {
  console.log(dummy);
  console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              
               {item.card.info.isVeg ? (
                <div className="w-4 h-4 border-2 border-green-700 flex items-center justify-center rounded-sm">
                  <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                </div>
              ) : (
                <div className="w-4 h-4 border-2 border-red-700 flex items-center justify-center rounded-sm">
                  <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                </div>
              )}


              <h1 className="font-bold text-gray-900">
                {item.card.info.name}
              </h1>
              <h1 className="text-black">
                ₹
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </h1>
              <span className="text-yellow-600">
                ⭐{item.card.info.ratings.aggregatedRating.rating}&nbsp;
                </span>
                <span className="text-gray-800">
                (
                {item.card.info.ratings.aggregatedRating.ratingCountV2})
              </span>
            </div>
            <p className="text-[14px] text-gray-900">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 m-25 ml-15 w-25 rounded-lg bg-white text-green-600 font-bold  cursor-pointer hover:bg-gray-300 "
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>

            <img src={CDN_URL + item.card.info.imageId} className="w-35 rounded-lg  h-30 mx-10 " />
            <h3 className="text-center text-xs text-gray-400 mx-17 mt-6 ">Customisable</h3>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
