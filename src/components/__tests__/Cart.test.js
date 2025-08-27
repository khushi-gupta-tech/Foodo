import {fireEvent, render,screen} from "@testing-library/react";
import {act} from "react";
import RestMenu from "../RestMenu";
import MOCK_DATA from "../mocks/mockRestMenu.json"
import {Provider} from "react-redux";
import appStore from "../../../redux/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(()=>
     Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
);

it("should Load restaurant Menu Component", async()=>{
    await act(async()=>{
        render(
        <Provider store={appStore}>
            <Header/>
            <RestMenu/>
            <Cart/>
        </Provider>)
    });

    const accordianHeader = screen.getByText("Biryani(5)")
    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    expect(screen.getByText("Cart-(0 items)")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button",{name:"ADD"});
    fireEvent.click(addBtns[0])

    expect(screen.getByText("Cart-(1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1])
    
    expect(screen.getByText("Cart-(2 items)")).toBeInTheDocument();
 
    expect(screen.getAllByTestId("foodItems").length).tobe(7);

    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));

     expect(screen.getAllByTestId("foodItems").length).tobe(5);

    expect(screen.getByText("CArt is empty.Add Items to the cart!")).toBeInTheDocument();

    
});