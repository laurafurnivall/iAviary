import { Outlet, Route, Routes } from "react-router-dom"
import { Birds } from "../birds/Birds"
import { BirdForm } from "../birds/BirdForm"
import { BirdEdit } from "../birds/BirdEdit"
import { EditSpecies } from "../species/SpeciesEdit"
import { Profile } from "../profile/Profile"
import { SpeciesContainer } from "../species/SpeciesContainer"

export const AdminViews = () => {
	return (
	<Routes>
		<Route path="/" element={
			<>
				{/* <h1>iAviary Admin</h1>
				<div>Birds, birds, birds!</div> */}

				<Outlet />
			</>
		}>
            <Route path="birds" element={ <Birds /> } />
			<Route path="birds/addbird" element={ <BirdForm /> } />
			<Route path="birds/:birdId" element={ <BirdEdit /> } />
			<Route path="species" element={ <SpeciesContainer /> } />
			<Route path="species/:speciesId" element={ <EditSpecies /> } />
			<Route path="profile" element={ <Profile /> } />
		</Route>
	</Routes>
)
}