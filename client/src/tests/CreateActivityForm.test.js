import { render, screen } from "../test-utils";
import CreateActivityForm from "../components/CreateActivityForm";

describe("Create Activity form", () => {
  beforeEach(() => {
    let formData = {
      name: "",
      difficulty: "none",
      duration: "none",
      season: [],
      countriesId: [],
    };
    render(<CreateActivityForm formData={formData} />);
  });
  it("renders Name input", () => {
    const labelEl = screen.getByTestId("name-label");
    const inputEl = screen.getByTestId("name-input");
    expect(labelEl).toBeInTheDocument();
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });
  describe("Difficulty select", () => {
    it("renders Difficulty label", () => {
      const label = screen.getByText(/difficulty:/i);
      expect(label).toBeInTheDocument();
    });
    it("renders Difficulty select input", () => {
      const selectInput = screen.getByRole("combobox", { name: /difficulty/i });
      expect(selectInput).toBeInTheDocument();
    });
    it("renders Easy option", () => {
      const optionOne = screen.getByText(/easy/i);
      expect(optionOne).toBeInTheDocument();
    });
    it("renders Medium option", () => {
      const optionTwo = screen.getByText(/medium/i);
      expect(optionTwo).toBeInTheDocument();
    });
    it("renders Hard option", () => {
      const optionThree = screen.getByText(/hard/i);
      expect(optionThree).toBeInTheDocument();
    });
  });
  describe("Duration select", () => {
    it("renders Duration label", () => {
      const label = screen.getByText(/duration:/i);
      expect(label).toBeInTheDocument();
    });
    it("renders Duration select input", () => {
      const selectInput = screen.getByRole("combobox", { name: /duration/i });
      expect(selectInput).toBeInTheDocument();
    });
    it("renders 1 día option", () => {
      const optionOne = screen.getByText(/1 día/i);
      expect(optionOne).toBeInTheDocument();
    });
    it("renders 2 días option", () => {
      const optionTwo = screen.getByText(/2 días/i);
      expect(optionTwo).toBeInTheDocument();
    });
    it("renders 3 días option", () => {
      const optionThree = screen.getByText(/3 días/i);
      expect(optionThree).toBeInTheDocument();
    });
  });
});
