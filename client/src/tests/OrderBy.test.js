import { render, screen } from "../test-utils";
import OrderBy from "../components/OrderBy";

describe("orderBy", () => {
  beforeEach(() => {
    render(<OrderBy />);
  });
  it("renders Order by label", () => {
    const label = screen.getByText(/order by:/i);
    expect(label).toBeInTheDocument();
  });
  it("renders Order by select input", () => {
    const selectInput = screen.getByRole("combobox");
    expect(selectInput).toBeInTheDocument();
  });
  it("renders From A-Z option", () => {
    const optionOne = screen.getByText(/from a-z/i);
    expect(optionOne).toBeInTheDocument();
  });
  it("renders From Z-A option", () => {
    const optionTwo = screen.getByText(/from z-a/i);
    expect(optionTwo).toBeInTheDocument();
  });
  it("renders Higher population option", () => {
    const optionThree = screen.getByText(/higher population/i);
    expect(optionThree).toBeInTheDocument();
  });
  it("renders Smaller population option", () => {
    const optionFour = screen.getByText(/smaller population/i);
    expect(optionFour).toBeInTheDocument();
  });
});
