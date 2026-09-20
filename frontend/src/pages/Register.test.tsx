import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { expect, test, vi } from "vitest"
import Register from "./Register"


test("renders the registration form", () => {
    render(
        <MemoryRouter>
            <Register />
        </MemoryRouter>,
    )

    expect(
        screen.getByRole("heading", { name: /register/i }),
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/first name/i)).toBeRequired()
    expect(screen.getByLabelText(/last name/i)).toBeRequired()
    expect(screen.getByLabelText(/e-mail/i)).toBeRequired()
    expect(screen.getByLabelText(/^password:$/i)).toBeRequired()
    expect(screen.getByLabelText(/repeat password/i)).toBeRequired()

    expect(
        screen.getByRole("button", { name: /create account/i }),
    ).toBeInTheDocument()
})

test("sends registration data to the backend", async () => {
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
                    detail: "Registration successful.",
                }),
                {
                    status: 201,
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
        `${import.meta.env.VITE_API_URL}/api/auth/register/`,
        {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": "test-csrf-token",
            },
            body: JSON.stringify({
                first_name: "Test",
                last_name: "User",
                email: "test@example.com",
                password: "correct-password",
            }),
        },
    )

    fetchMock.mockRestore()
})

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