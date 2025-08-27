import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  // Subscibing to the store using a  selector

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className=" fixed top-0 left-0 w-full z-50 bg-white flex justify-between shadow-lg ">
      <div className="logo-container">
        <img
          className="w-22 cursor-pointer"
          src={LOGO_URL}
          alt="App LOGO"
        />
      </div>
      <div className="flex items-center px-4">
        <ul className="flex p-4 m-4 text-gray-500 font-bold [&>li>a]:hover:text-yellow-400">
          {/* <li className="px-4 hover:text-blue-500">
            Online Status :{onlineStatus ? "✅" : "❌"}
          </li> */}
          <li className="px-4">
            <Link to="/" className="hover:text-black">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">
              <span className="bg-green-700 text-center text-[13px] p-0.5  rounded-t-full m-1.5  text-white hover:bg-yellow-400">
                {cartItems.length}
              </span>
              Cart
            </Link>
          </li>
          <div>
            <button
              className={`border p-1 ml-7 text-black  rounded-lg
    ${
      btnNameReact === "Login"
        ? "bg-white hover:bg-yellow-100"
        : "bg-white hover:bg-yellow-300"
    }`}
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login"); // it renders the whole header component
              }}
            >
              {btnNameReact}
            </button>
          </div>

          {/* <li className="px-4 font-bold">
            <a>{loggedInUser}</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
