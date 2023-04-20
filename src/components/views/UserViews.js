import { Outlet, Route, Routes } from "react-router-dom"
import { Birds } from "../birds/Birds"
import { BirdForm } from "../birds/BirdForm"

export const UserViews = () => {
	return (
	<Routes>
		<Route path="/" element={
			<>
				<h1>iAviary</h1>
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