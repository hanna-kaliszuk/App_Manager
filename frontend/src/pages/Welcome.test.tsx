import {render, screen} from "@testing-library/react"
import {MemoryRouter} from "react-router-dom"
import {expect, test, vi} from "vitest"
import Welcome from "./Welcome"

test("renders the welcome page", () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
        new Response(
            JSON.stringify({
                first_name: "Test",
                last_name: "User",
                email: "test@example.com",
            }),
            {
                status: 200,
                headers: {"Content-Type": "application/json"},
            },
        ),
    )
    render(
        <MemoryRouter>
            <Welcome/>
        </MemoryRouter>,
    )

    expect(
        screen.getByRole("heading", {name: /welcome/i}),
    ).toBeInTheDocument()

    expect(
        screen.getByRole("link", {name: /job applications/i}),
    ).toHaveAttribute("href", "/jobs")

    expect(
        screen.getByRole("link", {name: /studies applications/i}),
    ).toHaveAttribute("href", "/studies")
})

test("shows the current user's first name", async () => {
    const fetchMock = vi.spyOn(globalThis, "fetch")

    fetchMock.mockResolvedValueOnce(
        new Response(
            JSON.stringify({
                first_name: "Test",
                last_name: "User",
                email: "test@example.com",
            }),
            {
                status: 200,
                headers: {"Content-Type": "application/json"},
            },
        ),
    )

    render(
        <MemoryRouter>
            <Welcome/>
        </MemoryRouter>,
    )

    expect(
        await screen.findByRole("heading", {name: "Welcome Test!"}),
    ).toBeInTheDocument()
})

