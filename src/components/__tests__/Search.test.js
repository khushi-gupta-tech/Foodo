import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// global object
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should Search Res List for burger text input", async () => {
  await act((async) =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
     const cardsBeforeSearch = screen.getAllByTestId("resCard")
     expect(cardsBeforeSearch.length).toBe(5);

      const searchBtn = screen.getByRole("button",{name:"Search"});

      const searchInput = screen.getByTestId("searchInput")

      fireEvent.change(searchInput,{target:{value:"pizza"}})

      fireEvent.click(searchBtn);

      // screen should load 4 cards
     const cardsAfterSearch =  screen.getAllByTestId("resCard")      
      expect(cardsAfterSearch.length).toBe(2);
});

it("should filter Top rated  Restaurant", async () => {
  await act((async) =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
    const cardsBeforFilter = screen.getAllByTestId("resCard")
     expect(cardsBeforFilter.length).toBe(5);

     const topRatedBtn = screen.getByRole("button",{name:"Top Rated Restaurant"})
     fireEvent.click(topRatedBtn);

      const cardsAfterFilter =  screen.getAllByTestId("resCard")      
      expect(cardsAfterFilter.length).toBe(4);

});

