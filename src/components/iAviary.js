import { Route, Routes } from "react-router-dom"
import { Authorized } from "./views/Authorized"
import { Login } from "./auth/Login"
import { ApplicationViews } from "./views/ApplicationViews"
import "./iAviary.css"
import { Register } from "./auth/Register"
import { NavBar } from "./nav/NavBar"



export const Aviary = () => {
	return <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
					<NavBar/>
					<ApplicationViews />
				</>
			</Authorized>

		} />
	</Routes>
}

