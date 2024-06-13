import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import FormFeedBack from "../FormFeedBack";

const server = setupServer(
  http.get("/post/add", () => {
    return HttpResponse.json({
      title: "test-title",
      body: "test-body",
      id: 101,
    });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Add Post Form", () => {
  render(<FormFeedBack />);

  it("should have button, body and title inputs", () => {
    const title = screen.getAllByPlaceholderText("title");
    const body = screen.getAllByPlaceholderText("body");
    const button = screen.getByRole("button");

    expect(title).toBeInTheDocument();
    expect(body).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
