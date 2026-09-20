import { fireEvent, render, screen, within } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { expect, test, vi } from "vitest"
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

test("sends login data to the backend", async () => {
    const fetchMock = vi.spyOn(globalThis, "fetch")

    Object.defineProperty(document, "cookie", {
        writable: true,
        value: "csrftoken=test-csrf-token",
    })

    fetchMock
        .mockResolvedValueOnce(
            new Response(null, {
                status: 200,
            }),
        )
        .mockResolvedValueOnce(
            new Response(
                JSON.stringify({
                    detail: "valid credentials.",
                }),
                {
                    status: 200,
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            ),
        )

    render(
        <MemoryRouter>
            <LogIn />
        </MemoryRouter>,
    )

    fireEvent.change(screen.getByLabelText(/e-mail/i), {
        target: { value: "test@example.com" },
    })

    fireEvent.change(screen.getByLabelText(/^Password:$/i), {
        target: { value: "correct-password" },
    })

    fireEvent.click(
        screen.getByRole("button", { name: /log in/i }),
    )

    await vi.waitFor(() => {
        expect(fetchMock).toHaveBeenCalledTimes(2)
    })

    expect(fetchMock).toHaveBeenNthCalledWith(
        1,
        `${import.meta.env.VITE_API_URL}/api/auth/csrf/`,
        {
            credentials: "include",
        },
    )

    expect(fetchMock).toHaveBeenNthCalledWith(
        2,
        `${import.meta.env.VITE_API_URL}/api/auth/login/`,
        {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": "test-csrf-token",
            },
            body: JSON.stringify({
                email: "test@example.com",
                password: "correct-password",
            }),
        },
    )
})