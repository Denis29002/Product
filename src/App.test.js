import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import CatalogMenu from "./components/Product/CatalogMenu";
import List from "./components/Product/List";
import Pagination2 from "./components/Product/Pagination2";
import Product from "./components/Product/Product";

test("renders learn react link", () => {
  render(<App />);
  screen.debug();
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  render(<CatalogMenu />);
  const linkElement2 = screen.getByText(/CatalogMenu/i);
  expect(linkElement2).toBeInTheDocument();
  render(<List />);
  const linkElement3 = screen.getByText(/List/i);
  expect(linkElement3).toBeInTheDocument();
  render(<Pagination2 />);
  const linkElement4 = screen.getByText(/Pagination2/i);
  expect(linkElement4).toBeInTheDocument();
  render(<Product />);
  const linkElement5 = screen.getByText(/Product/i);
  expect(linkElement5).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Searh item...")).toBeInTheDocument();
  screen.debug();
  fireEvent.change(screen.getAllByRole("textbox"), {
    target: { value: "React" },
  });
  screen.debug();
  describe("Product component", () => {
    test("renders Product component correctly", () => {
      render(<Product />);

      expect(screen.getByText("Loading products...")).toBeInTheDocument();
    });

    test("searches item correctly", () => {
      render(<Product />);

      const input = screen.getByRole("textbox");
      fireEvent.change(input, { target: { value: "test" } });

      expect(screen.getByText("test item")).toBeInTheDocument();
    });

    test("loads products on page change", () => {
      render(<Product />);

      // mock axios request
      jest.spyOn(window, "axios").mockImplementationOnce(() => ({
        data: { products: ["test1", "test2"], total: 2 },
      }));

      fireEvent.click(screen.getByRole("button", { name: "Next" }));

      expect(screen.getByText("Loading products...")).toBeInTheDocument();
      expect(screen.getByText("test1")).toBeInTheDocument();
      expect(screen.getByText("test2")).toBeInTheDocument();
    });
  });
});
