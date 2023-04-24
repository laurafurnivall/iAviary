import { Link, useNavigate } from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/birds">Aviary</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/species">Species</Link>
            </li>
            <li className="navbar__item active rightAlign">
                <Link className="navbar__link" to="/profile">Profile</Link>
            </li>
            <li className="navbar__item navbar__logout rightAlign">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("aviary_user")
                    navigate("/", { replace: true })
                }}>Logout</Link>
            </li>
        </ul>
    )
}