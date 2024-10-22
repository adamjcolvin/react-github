import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserDetails from "./UserDetails";

const data = {
  avatar_url: "testing.com",
  login: "testinglogin",
  name: "Test",
  location: "London",
};

beforeEach(() => {
  render(<UserDetails data={data} />);
});

test("The user's avatar is shown", () => {
  let avatar = screen.getByAltText(data.login);
  expect(avatar).toHaveAttribute("src", data.avatar_url);
});

test("The user's login is shown", () => {
  let login = screen.getByRole("heading", { level: 1 });
  expect(login).toHaveTextContent(data.login);
});

test("The user's name is shown", () => {
  let name = screen.getAllByRole("paragraph")[0];
  expect(name).toHaveTextContent(data.name);
});

test("The user's location is shown", () => {
  let location = screen.getAllByRole("paragraph")[1];
  expect(location).toHaveTextContent(data.location);
});
