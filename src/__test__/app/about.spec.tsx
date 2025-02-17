import AboutLayout from "@/app/about/layout";
import AboutPage from "@/app/about/page";
import { render } from "@testing-library/react";

describe("About Page", () => {
  it("should render the about page", () => {
    const page = render(
      <AboutLayout>
        <AboutPage />
      </AboutLayout>
    );
    expect(page).toMatchSnapshot();
  });
});
