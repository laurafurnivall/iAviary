import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    const [email, set] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}`)
        .then(response => response.json())
        .then((foundUsers) => {
            if (foundUsers.length === 1) {
                const user = foundUsers[0]
                localStorage.setItem("aviary_user", JSON.stringify({
                    id: user.id,
                    admin: user.isAdmin
                }))

                navigate("/")
            }
            else {
                window.alert("Invalid login")
            }
        })
    }

    return (
        <main className="container--login">
            <img className="logo" alt="Logo Image for iAviary" src="../assets/iAviaryLogo.jpg"/>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h3>Login</h3>
                    <fieldset>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            placeholder="email address"
                            className="form-control"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button className="button" type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <div><Link className="linkToRegister" to="/register">Not a member yet?</Link></div>
            </section>
        </main>
    )
}