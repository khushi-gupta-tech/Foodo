import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart, removeItem } from "../../redux/cartSlice";
import {Link} from "react-router-dom";

const Cart = () => {
  // again subscribing  to our store using selector

  const cardItems = useSelector((store) => store.cart.items);
  console.log(cardItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handlePop = () => {
    dispatch(removeItem());
  };
  return (
    <div className=" text-center my-30 p-5 ">
      <div className="w-6/12 m-auto">
        {cardItems.length !== 0 && (
          <button
            className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer mr-144 "
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
        {cardItems.length !== 0 && (
          <button
            className="bg-black text-white p-2 cursor-pointer ml-200 "
            onClick={handlePop}
          >
            X
          </button>
        )}
        {cardItems.length === 0 && (
          <div className="" >
            <img src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif" className="m-[-120px] ml-8" />
            <h1 className="font-bold text-2xl m-15 p-10">Your cart is empty</h1>
            <h1 className="text-gray-500 m-[-100px]">You can go to home page to view more restaurants</h1>
           <Link to="/"><button className="bg-yellow-400 p-3 m-30 text-white font-bold cursor-pointer">SEE RESTAURANTS</button></Link>
          </div>
        )}
        <CartItem items={cardItems} />
      </div>
    </div>
  );
};

export default Cart;
