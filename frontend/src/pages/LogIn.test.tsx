import { render, screen, within } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { expect, test } from "vitest"
import LogIn from "./LogIn"

test("renders the login heading", () => {
  render(
    <MemoryRouter>
      <LogIn />
    </MemoryRouter>
  )

  expect(
    screen.getByRole("heading", { name: /log in/i })
  ).toBeInTheDocument()
})

test("renders required email and password fields", () => {
  render(
    <MemoryRouter>
      <LogIn />
    </MemoryRouter>
  )

  const email = screen.getByLabelText(/e-mail/i)
  const password = screen.getByLabelText(/password/i)

  expect(email).toBeRequired()
  expect(password).toBeRequired()
})

test("provides navigation to home and registration", () => {
  render(
    <MemoryRouter>
      <LogIn />
    </MemoryRouter>
  )

  const nav = screen.getByRole("navigation")

  expect(within(nav).getByRole("link", { name: /home/i }))
    .toHaveAttribute("href", "/")

  expect(within(nav).getByRole("link", { name: /register/i }))
    .toHaveAttribute("href", "/register")
})