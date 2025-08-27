import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestMenu from "./components/RestMenu";
import UserContext from "./utils/UserContext";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import appStore from "../redux/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

//const About = lazy(()=> import("./components/About"))

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();

  // authentication
  useEffect(() => {
    //make an Ap call and send username and password
    const data = {
      name: "khushi gupta",
    };

    setUserInfo(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />, // load homepage
      children: [
        { path: "/", element: <Body /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        {
          path: "/grocery",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <Grocery />
            </Suspense>
          ),
        },
        { path: "/restaurants/:resId", element: <RestMenu /> },
        { path: "/cart", element: <Cart /> },
      ],
      errorElement: <Error />,
    },
  ],
  {
    //  enables upcoming React Router v7 behavior
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
