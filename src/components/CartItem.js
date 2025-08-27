import { CDN_URL } from "../utils/constants";

const CartItem = ({ items }) => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex items-start gap-4 border-b border-gray-200 py-4 last:border-none"
        >
          {/* Item details */}
          <div className="w-9/12">
            <div className="flex items-center gap-2 mb-1">
              {/* Veg / Non-Veg indicator */}
              {item.card.info.isVeg ? (
                <div className="w-4 h-4 border-2 border-green-700 flex items-center justify-center rounded-sm">
                  <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                </div>
              ) : (
                <div className="w-4 h-4 border-2 border-red-700 flex items-center justify-center rounded-sm">
                  <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                </div>
              )}
              <h1 className="font-semibold text-gray-900 text-lg">
                {item.card.info.name}
              </h1>
            </div>

            {/* Price & Rating */}
            <div className="flex items-center gap-3 mb-1">
              <span className="text-gray-800 font-medium">
                ₹{item.card.info.defaultPrice / 100 || item.card.info.price / 100}
              </span>
              {item.card.info.ratings.aggregatedRating?.rating && (
                <span className="text-yellow-600 text-sm">
                  ⭐ {item.card.info.ratings.aggregatedRating.rating}
                </span>
              )}
              {item.card.info.ratings.aggregatedRating?.ratingCountV2 && (
                <span className="text-gray-600 text-sm">
                  ({item.card.info.ratings.aggregatedRating.ratingCountV2})
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 leading-snug">
              {item.card.info.description}
            </p>
          </div>

          {/* Item image */}
          <div className="w-3/12 flex justify-center items-center">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-24 h-20 object-cover rounded-lg shadow-sm"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
