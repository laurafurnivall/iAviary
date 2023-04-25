import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()


    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/"><img className="logoNavBar" alt="Logo Image for iAviary" src="../assets/LogoSmallAviary.jpg"/></Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/birds">Collection Management</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/species">Species Database</Link>
            </li>
            <li className="navbar__item active right">
                <Link className="navbar__link" to="/profile">Profile</Link>
            </li>
            <li className="navbar__item active right">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("aviary_user")
                    navigate("/", { replace: true })
                }}>Logout</Link>
            </li>
        </ul>
    )
}