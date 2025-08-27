import {fireEvent, render,screen} from "@testing-library/react";
import Header from "../Header";
import appStore from "../../../redux/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Querying
  const loginButton = screen.getByRole("button",{name:"Login"});
  // or
  //const loginButton = screen.getByText("Login");

  //Assertion
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Querying
  const cardItems = screen.getByText(/Cart/);

  //Assertion
  expect(cardItems).toBeInTheDocument();
});


it("Should change login Button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Querying
  const loginButton = screen.getByRole("button",{name:"Login"});

   fireEvent.click(loginButton);

 const logoutButton = screen.getByRole("button",{name:"Logout"})
  //Assertion
  expect(logoutButton).toBeInTheDocument();
});