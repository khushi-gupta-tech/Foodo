import {render,screen} from "@testing-library/react";
import RestCart from "../RestCart";
import MOCK_DATA from "../mocks/resCartMock.json"
import "@testing-library/jest-dom";
import { withPromtedLabel } from "../RestCart";

it("should render restCard component with props Data",()=>{

    render(<RestCart resData={MOCK_DATA}/>);

    // Query
     const name = screen.getByText("Olio - The Wood Fired Pizzeria")

     expect(name).toBeInTheDocument();
})

it("should render restCard component with Promoted Label",()=>{
   // Homework
   // test HOC - withPromotedLabel()
   const PromotedRestCard = withPromtedLabel(RestCart);

   render(<PromotedRestCard resData={MOCK_DATA} />)

   expect(screen.getByText("Promoted")).toBeInTheDocument();
})