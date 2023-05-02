import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { Link } from "react-router-dom"

export const Register = (props) => {
    const [user, setUser] = useState({ //properties of user object
        email: "",
        name: "",
        aviaryName: "",
        address: "",
        aboutInfo: "",
        interests: "",
        isAdmin: false
    })
    let navigate = useNavigate()

    //Function to register new user, POST to users in database, navigates to landing page
    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("aviary_user", JSON.stringify({
                        id: createdUser.id,
                    }))

                    navigate("/")
                }
            })
    }

    //Function attached to the Register button, checks for duplicate emails, then 
    //registers new user.
    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${user.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateUser = (evt) => {
        const copy = {...user}
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }

    return (
        //Form for registration
        <main className="registerContainer">
            <form className="form--register" onSubmit={handleRegister}>
            <img className="logoRegister" alt="Logo Image for iAviary" src="../assets/iAviaryLogo.jpg"/>
                <h4 className="h4 mb-4 font-weight-normal">Register for iAviary</h4>
                <fieldset>
                    <label htmlFor="name"> Name </label>
                    <input onChange={updateUser}
                           type="text" id="name" className="form-control"
                           placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="aviaryName"> Aviary Name </label>
                    <input onChange={updateUser}
                        type="text" id="aviaryName" className="form-control"
                        placeholder="Enter your aviary name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateUser}
                        type="email" id="email" className="form-control"
                        placeholder="Enter your email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="address"> Address </label>
                    <input onChange={updateUser}
                        type="text" id="address" className="form-control"
                        placeholder="City, State" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="aboutInfo"> About </label>
                    <textarea onChange={updateUser}
                        type="text" id="aboutInfo" className="form-control"
                        placeholder="Tell us about yourself!" />
                </fieldset>
                <fieldset>
                    <label htmlFor="interests"> Interests </label>
                    <textarea onChange={updateUser}
                        type="text" id="interests" className="form-control"
                        placeholder="Give us three random facts!" />
                </fieldset>
                <fieldset className="RegisterButton">
                    <button className="button" type="submit" onClick={handleRegister}> Register </button>
                </fieldset>
            </form>
            <section>
                <div><Link className="linkToRegister" to="/login">Wait! I already have an account!</Link></div>
            </section>
        </main>
    )
}