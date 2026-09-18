import { render, screen, within } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { test, expect } from 'vitest'
import Home from "./Home"

test("provides navigation to login and registration", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )

  const nav = screen.getByRole("navigation")

  expect(within(nav).getByRole("link", { name: /log in/i }))
    .toHaveAttribute("href", "/login")

  expect(within(nav).getByRole("link", { name: /register/i }))
    .toHaveAttribute("href", "/register")
})

test("renders the main page heading", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )

  expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
})

test("renders the main information sections", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )

  expect(
    screen.getByRole("heading", { name: /key features/i })
  ).toBeInTheDocument()

  expect(
    screen.getByRole("heading", { name: /how to use/i })
  ).toBeInTheDocument()
})