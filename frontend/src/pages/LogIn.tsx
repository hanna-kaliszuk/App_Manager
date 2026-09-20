import Navbar from "../components/Navbar/Navbar"
import { Link } from "react-router-dom"
import { useState } from "react"

function getCookie(name: string) {
    const cookies = document.cookie.split(";") // find all cookies

    for (const cookie of cookies) {
        const [key, value] = cookie.trim().split("=")

        if (key === name) {
            // if the cookie we were looking for is there, decode it
            return decodeURIComponent(value)
        }
    }

    return null
}

async function getCsrfToken() {
    await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/csrf/`,
        {
            credentials: "include",
        },
    )

    const csrfToken = getCookie("csrftoken")

    if (!csrfToken) {
        throw new Error("CSRF token not found.")
    }

    return csrfToken
}

function LogIn() {
    const [error, setError] = useState("")

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setError("")

        const formData = new FormData(event.currentTarget)

        const email = formData.get("email")
        const password = formData.get("password")

        const csrfToken = await getCsrfToken()

        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login/`,
            {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrfToken,
                },
                body: JSON.stringify({
                    email,
                    password,
                })
            },
        )

        if (!response.ok) {
            const data = await response.json()
            setError(data.detail)
            return
        }
    }

    return (
        <>
            <Navbar>
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
            </Navbar>

            <h1>Log In</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    E-mail:
                    <input type="email" name="email" required/>
                </label>

                <label>
                    Password:
                    <input type="password" name="password" required/>
                </label>

                {error && <p role="alert">{error}</p>}
                <button type="submit">Log In</button>
            </form>
        </>
    )
}

export default LogIn