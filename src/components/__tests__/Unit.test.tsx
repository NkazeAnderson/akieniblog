import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Button from "../Button";
import Avatar from "../Avatar";
import Comments, { Comment } from "../Comments";

// Avatar..............
describe("Avatar Test", () => {
  it("should have an image", () => {
    render(<Avatar path="/user1.jpg" />);

    const image = screen.getByAltText("avatar");

    expect(image).toBeInTheDocument();
  });
  it("to be rounded", () => {
    render(<Avatar path="/user1.jpg" />);

    const image = screen.getByAltText("avatar");

    expect(image).toHaveClass("avatar");
  });
});

// Button ............
describe("Button Test", () => {
  it("Should have button element", () => {
    render(<Button text="Test Button" />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Test Button");
  });
});
// Comment ....
describe("Comment Test", () => {
  it("have image, author and message", () => {
    render(<Comment image="/user1.jpg" author="author" message="message" />);

    const images = screen.getAllByAltText("avatar");
    const author = screen.getByText("author");
    const message = screen.getByText("message");

    expect(images).toHaveLength(1);
    expect(author).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });
});
