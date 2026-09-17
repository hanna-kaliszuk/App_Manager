import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/welcome">Welcome</Link>
      <Link to="/studies">Studies</Link>
      <Link to="/jobs">Jobs</Link>
      {/* Log Out */}
    </nav>
  )
}

export default Navbar