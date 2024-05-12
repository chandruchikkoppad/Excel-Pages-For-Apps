
import { render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Sheet from './../Components/Sheet';
it("should render the sheet component", () => {
  render(
    <BrowserRouter>
    <Sheet/>
    </BrowserRouter>
  )
   expect(screen.getByText("Back to home")).toBeInTheDocument();
   expect(screen.getByText("All Sheets")).toBeInTheDocument();
   expect(screen.getByPlaceholderText("Enter sheet name")).toBeInTheDocument();
   expect(screen.getByText("Save Data")).toBeInTheDocument();
});
