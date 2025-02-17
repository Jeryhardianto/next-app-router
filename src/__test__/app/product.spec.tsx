
import ProductPage from "@/app/(admin)/dashboard/product/page";

import { render } from "@testing-library/react";

describe("Product Page", () => {
  it("should render the product page", () => {
    const page = render(<ProductPage />);
    expect(page).toMatchSnapshot();
  });
});