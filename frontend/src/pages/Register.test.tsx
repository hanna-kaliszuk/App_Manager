import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { expect, test, vi } from "vitest"
import Register from "./Register"


test("shows an error when passwords are different", async () => {
    render(
        <MemoryRouter>
            <Register />
        </MemoryRouter>,
    )

    fireEvent.change(screen.getByLabelText(/^Password:$/i), {
        target: { value: "password123" },
    })

    fireEvent.change(screen.getByLabelText(/repeat password/i), {
        target: { value: "different123" },
    })

    fireEvent.submit(
        screen.getByRole("button", { name: /create account/i }).closest("form")!,
    )

    const alert = await screen.findByRole("alert")

    expect(alert).toHaveTextContent("Passwords must be identical")
})


test("shows an error returned by the backend", async () => {
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
                    detail: "Email is already in use.",
                }),
                {
                    status: 400,
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            ),
        )

    render(
        <MemoryRouter>
            <Register />
        </MemoryRouter>,
    )

    fireEvent.change(screen.getByLabelText(/first name/i), {
        target: { value: "Test" },
    })

    fireEvent.change(screen.getByLabelText(/last name/i), {
        target: { value: "User" },
    })

    fireEvent.change(screen.getByLabelText(/e-mail/i), {
        target: { value: "test@example.com" },
    })

    fireEvent.change(screen.getByLabelText(/^Password:$/i), {
        target: { value: "correct-password" },
    })

    fireEvent.change(screen.getByLabelText(/repeat password/i), {
        target: { value: "correct-password" },
    })

    fireEvent.click(
        screen.getByRole("button", { name: /create account/i }),
    )

    const alert = await screen.findByRole("alert")

    expect(alert).toHaveTextContent("Email is already in use.")

    fetchMock.mockRestore()
})