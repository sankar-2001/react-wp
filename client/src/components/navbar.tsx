import { Link } from "react-router-dom"

export const Navbar = () => {
    return <div className="navbar">
        <div className="navbar-title">
            <h1> WEB PORTAL </h1>
        </div>

        <div className="navbar-links" >
            <Link to="/"> Homepage</Link>
            <Link to="/settings"> Setting</Link>
            <Link to="/auth"> Login</Link>
            <Link to="/dashboard"> Dashboard</Link>
        </div>
    </div>
}               