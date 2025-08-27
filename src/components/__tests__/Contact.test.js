import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test case", () => {

  beforeAll(()=>{
    console.log("Before All")
  })

  beforeEach(()=>{
    console.log("Before Each")
  })

  afterAll(()=>{
    console.log("After All")
  })

  afterEach(()=>{
    console.log("After Each")
  })
  
  it("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button",{name:"Submit"});

    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("should load input name inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Enter Your Name");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("should load 2 input boxes on the Contact component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    // this returns your JSX element
    console.log(inputBoxes.length);
    // Assertion
    expect(inputBoxes.length).toBe(3);
  });
});
