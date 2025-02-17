
import ProductPage from "@/app/product/page";
import { render } from "@testing-library/react";

describe("Product Page", () => {
  it("should render the product page", () => {
    const page = render(<ProductPage params={{ slug: [] }} />);
    expect(page).toMatchSnapshot();
  });
});