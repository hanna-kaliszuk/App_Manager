import Navbar from "../components/Navbar/Navbar"
import { Link, useNavigate } from "react-router-dom";
import {useState} from "react";

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

function Register() {
    const navigate = useNavigate()
    const [error, setError] = useState("")

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setError("")

        const formData = new FormData(event.currentTarget)

        const firstName = formData.get("firstName")
        const lastName = formData.get("lastName")
        const email = formData.get("email")
        const password = formData.get("password")
        const passwordAgain = formData.get("passwordAgain")

        if (typeof password !== "string" || typeof passwordAgain !== "string") {
            setError("Password values must be strings")
            return
        }

        if (password !== passwordAgain) {
            setError("Passwords must be identical")
            return
        }

        await fetch(
            `${import.meta.env.VITE_API_URL}/api/auth/csrf/`,
            {
                credentials: "include", // include cookies in the response
            },
        )

        const csrfToken = getCookie("csrftoken")
        if (!csrfToken) {
            throw new Error("CSRF token not found.")
        }

        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register/`,
            {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrfToken,
                },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    password,
                })
            },
        )

        if (response.ok) {
            navigate("/welcome")
            return
        }

        const data = await response.json()
        setError(data.detail)
        return
    }

    return (
        <>
            <Navbar>
                <Link to="/">Home</Link>
                <Link to="/login">Log In</Link>
            </Navbar>

            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name="firstName" required/>
                </label>

                <label>
                    Last Name:
                    <input type="text" name="lastName" required/>
                </label>

                <label>
                    E-mail:
                    <input type="email" name="email" required/>
                </label>

                <label>
                    Password:
                    <input type="password" name="password" required/>
                </label>

                <label>
                    Repeat Password:
                    <input type="password" name="passwordAgain" required/>
                </label>

                {error && <p role="alert">{error}</p>}
                <button type="submit">Create Account</button>

            </form>
        </>
    )
}

export default Register