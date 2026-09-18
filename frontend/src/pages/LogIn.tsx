import Navbar from "../components/Navbar/Navbar"
import {Link} from "react-router-dom";

function LogIn() {
    return (
    <>
      <Navbar>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
      </Navbar>

        <h1>Log In</h1>

        <form>
            <label>
                E-mail:
                <input type="email" name="email" required/>
            </label>

            <label>
                Password:
                <input type="password" name="password" required/>
            </label>

            <button type="submit">Log In</button>
        </form>
    </>
  )
}

export default LogIn