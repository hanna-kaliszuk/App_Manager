import Navbar from "../components/Navbar/Navbar"
import {Link} from "react-router-dom"
import {useEffect, useState} from "react"

type CurrentUser = {
    first_name: string
    last_name: string
    email: string
}

async function getCurrentUser() {
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/me/`,
        {
            credentials: "include",
        },
    )

    if (!response.ok) {
        return null
    }

    return response.json()
}

function Welcome() {
    const [user, setUser] = useState<CurrentUser | null>(null)

    useEffect(() => {
        getCurrentUser().then(setUser)
    }, [])


    return (
        <>
            <Navbar>
                <Link to="/jobs">Job Applications</Link>
                <Link to="/studies">Studies Applications</Link>
            </Navbar>
            <h1>Welcome {user?.first_name}!</h1>
        </>
    )
}

export default Welcome