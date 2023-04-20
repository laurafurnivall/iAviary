import { Outlet, Route, Routes } from "react-router-dom"
import { Birds } from "../birds/Birds"
import { BirdForm } from "../birds/BirdForm"

export const AdminViews = () => {
	return (
	<Routes>
		<Route path="/" element={
			<>
				<h1>iAviary Admin</h1>
				<div>Birds, birds, birds!</div>

				<Outlet />
			</>
		}>
            <Route path="birds" element={ <Birds /> } />
			<Route path="birds/addbird" element={ <BirdForm /> } />
		</Route>
	</Routes>
)
}